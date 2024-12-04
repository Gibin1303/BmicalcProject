const res1 = document.querySelector(".res1")
const res2 = document.querySelector(".res2")
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")



function calculateBMI(){
  const height =+ res1.value
  const weight =+ res2.value
  const BMI = weight/(height*height)
 if(BMI<18){
    result.innerHTML = `  =<p class="fs-5 result">your <span class="text-warning fw-bolder">BMI</span> is:</p>
UNDERWEIGHT ${BMI}`
 } else if(BMI>18.5 && BMI<=24.9){
    result.innerHTML = `<p class="fs-5 result">your <span class="text-warning fw-bolder">BMI</span> is</p>
NORMAL ${BMI}`
 }else if (BMI>=25 && BMI<29.9) {
     result.innerHTML = `OVERWEIGHT ${BMI}`
  }else if (BMI>=30) {
    result.innerHTML =` OBESE ${OBESE}`
 }
}

btn.addEventListener('click',calculateBMI)