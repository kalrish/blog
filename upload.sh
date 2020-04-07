export AWS_PROFILE=personal

BUCKET=www-blog-hosting-bucket-ly807ifs5tk9
BRANCH=master

cd output

find . -type f -printf '%P\n' | while read -r path
do
	aws s3api put-object --bucket "${BUCKET}" --key "${BRANCH}/${path%.html}" --content-type "$(file -b --mime -- "${path}")" --body "${path}"
done
