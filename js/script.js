document.form.onsubmit = 

function post(data){
axios
  .post("https://app.verified.ng/sfx-verify/v2/nin", data, {
    headers: {
      "api-key": "1604669125809",
      userid: "4l3G7uUtQ_yLc3F6",
    },
  })
  .then((res) => res.data)
  .then((data) => {
    if (!data.verified) alert("Sorry you are not verified");
    alert("Congrats!!!");
  }).catch(e=>alert("something went wrong"));


}