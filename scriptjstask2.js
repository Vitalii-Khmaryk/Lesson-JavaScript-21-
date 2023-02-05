$(function () {
  let s1 = $("#s1").text();
  console.log(s1);
  let s2 = $(".s2").text();
  console.log(s2);
  let s3 = $("i").text();
  console.log(s3);
  let s4 = $('[title="hello"]').text();
  console.log(s4);
  let s5 = $('[target="_blank"]').text();
  console.log(s5);
  let s6 = $(".extra:last").text();
  console.log(s6);

  let str = s1 + s2 + s3 + s4 + s5 + s6;
  alert(str);
});
