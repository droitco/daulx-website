(function(){
var hdr=document.querySelector('header'),btn=document.querySelector('.menu-toggle'),links=document.getElementById('navlinks');
if(hdr&&btn&&links){
  function setOpen(o){hdr.classList.toggle('open',o);btn.setAttribute('aria-expanded',o?'true':'false');btn.querySelector('.sr-only').textContent=o?'Close menu':'Menu';}
  btn.addEventListener('click',function(){setOpen(btn.getAttribute('aria-expanded')!=='true')});
  links.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&hdr.classList.contains('open')){setOpen(false);btn.focus()}});
  addEventListener('resize',function(){if(innerWidth>900)setOpen(false)});
}
document.querySelectorAll('form.form').forEach(function(form){
  form.setAttribute('novalidate','');
  var fields=form.querySelectorAll('input[required],input[type=email],input[type=tel]');
  function check(inp){var lab=inp.closest('.field'),err=lab&&lab.querySelector('.err');if(!lab||!err)return true;
    if(inp.type==='tel'){inp.value=inp.value.trim();}
    var ok=inp.checkValidity();lab.classList.toggle('invalid',!ok);inp.setAttribute('aria-invalid',ok?'false':'true');return ok;}
  fields.forEach(function(inp){inp.addEventListener('blur',function(){if(inp.value)check(inp)});inp.addEventListener('input',function(){if(inp.closest('.field.invalid'))check(inp)});});
  form.addEventListener('submit',function(e){var first=null;fields.forEach(function(inp){if(!check(inp)&&!first)first=inp});if(first){e.preventDefault();first.focus();}});
});
})();
