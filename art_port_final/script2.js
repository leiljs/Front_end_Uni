
const fileinput = document.getElementById('finput');
const theh2 = document.getElementById('theh2');
const theh4 = document.getElementById('theh4');
const theimg = document.getElementById('theimg');

fileinput.onchange = function() {

    const inp1Value = document.getElementById('inp1').value;
    const inp2Value = document.getElementById('inp2').value;
    
    theh2.textContent = inp1Value;
    theh4.textContent = inp2Value;

    theimg.src = URL.createObjectURL(fileinput.files[0]);
};