import"./hoisted.BMjPwfXw.js";const d=document.querySelectorAll("input, select, textarea"),l=document.querySelector(".btn-form-send"),r=document.querySelector("form");let s=0,c=0;const a=e=>{const t=e.closest(".input-container__box"),n=t.querySelector(".input-container__requirements"),i=t.querySelector(".requirements-icon");t.classList.remove("input-container__box--error"),n.classList.remove("input-container__requirements--error"),n.classList.add("input-container__requirements--success"),i.innerHTML='<i class="ti ti-circle-check"></i>'},u=e=>{const t=e.closest(".input-container__box"),n=t.querySelector(".input-container__requirements"),i=t.querySelector(".requirements-icon");t.classList.add("input-container__box--error"),n.classList.remove("input-container__requirements--success"),n.classList.add("input-container__requirements--error"),i.innerHTML='<i class="ti ti-circle-x"></i>',c++},m=e=>{const t=e.closest(".input-container__box"),n=t.querySelector(".input-container__requirements"),i=t.querySelector(".requirements-icon");t.classList.remove("input-container__box--error"),n.classList.remove("input-container__requirements--success"),n.classList.remove("input-container__requirements--error"),i.innerHTML='<i class="ti ti-exclamation-circle"></i>'},h=()=>{r.style.height=`${r.offsetHeight}px`,r.innerHTML=`
		<div class="input-container-alert">
			<i class="ti ti-mail-x input-container-alert__icon input-container-alert__icon--success"></i>
			<div class="input-container-alert__text-box">
				<h4>Formularz został pomyślnie wysłany</h4>
				<p>
					Skontaktujemy się z Tobą w najbliższym możliwym terminie. Prosimy
					o cierpliwość, odpowiemy najszybciej, jak to możliwe.
				</p>
			</div>
		</div>
	`},q=()=>{r.style.height=`${r.offsetHeight}px`,r.innerHTML=`
		<div class="input-container-alert">
			<i class="ti ti-mail-x input-container-alert__icon input-container-alert__icon--error"></i>
			<div class="input-container-alert__text-box">
				<h4>Nie udało się wysłać formularza</h4>
				<p>
					Wystąpił błąd po stronie serwera. Spróbuj ponownie póżniej. Jeśli
					problem nie ustępuje, skontaktuj się z nami poprzez adres e-mail:
					example@gmail.com.
				</p>
			</div>
		</div>
	`},p=e=>{e.id==="name"&&(e.value.length>=3?a(e):u(e),e.value.length==0&&s==0&&m(e)),e.id==="category"&&(e.value!="none"?a(e):u(e),e.value.length==0&&s==0&&m(e)),e.id==="description"&&(e.value.length!=0?a(e):u(e),e.value.length==0&&s==0&&m(e))},f=()=>{d.forEach(e=>{p(e)}),s=0};d.forEach(e=>{e.addEventListener("input",()=>{p(e)})});l.addEventListener("click",e=>{if(e.preventDefault(),s=1,c=0,f(),c==0){console.log("No errors."),l.disabled=!0,l.classList.add("btn--disabled");const t=new FormData(r);fetch("./php/handleForm.php",{method:"POST",body:t}).then(o=>o.json()).then(o=>{o.success?(h(),console.log("Form sended successfully.")):o.errors.forEach(_=>{p(_)})}).catch(o=>{q(),console.log(o)})}else console.log(`Error count: ${c}`)});
