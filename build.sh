set -e

jekyll \
	build \
	-V \
	-t \
	-d output \
	#

#find \
#	_site \
#	-type f \
#	-name '*.html' \
#	-exec \
#	rename \
#	.html \
#	'' \
#	'{}' \
#	\; \
#	#
#
#aws --profile personal s3 cp --recursive _site s3://www-blog-hosting-bucket-ly807ifs5tk9/master/

export AWS_PROFILE=personal

BUCKET=www-blog-hosting-bucket-ly807ifs5tk9
BRANCH=master

cd output

find . -type f -printf '%P\n' | while read -r path
do
	aws s3api put-object --bucket "${BUCKET}" --key "${BRANCH}/${path%.html}" --content-type "$(file -b --mime -- "${path}")" --body "${path}"
done
