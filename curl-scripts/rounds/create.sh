API="http://localhost:4741"
URL_PATH="/rounds"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "round": {
      "course": "'"${COURSE}"'",
      "date": "'"${DATE}"'",
      "score": "'"${SCORE}"'"
    }
  }'

echo
