function changetosignup(){
    document.getElementById('signupform').hidden = false;
    document.getElementById('loginform').hidden = true;
    document.getElementById('signuplabel').classList.remove('col-md-4');
    document.getElementById('signuplabel').classList.add('col-md-8');
    document.getElementById('loginlabel').classList.remove('col-md-8');
    document.getElementById('loginlabel').classList.add('col-md-4');
}

function changetologin(){
    document.getElementById('loginform').hidden = false;
    document.getElementById('signupform').hidden = true;
    document.getElementById('loginlabel').classList.remove('col-md-4');
    document.getElementById('loginlabel').classList.add('col-md-8');
    document.getElementById('signuplabel').classList.remove('col-md-8');
    document.getElementById('signuplabel').classList.add('col-md-4');
}

//document.onload(changetologin());
