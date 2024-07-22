const billInputamount = document.querySelector('#inputvalue')
const noofpeople = document.querySelector('#number-ofpeople')
const generatebillbutton = document.querySelector('.calculate-btn')
const eachpersonamount = document.querySelector('.each-person-bill span')
const totalbill = document.querySelector('.total-amount span')
const tipamount = document.querySelector('.Tip-amount span')
const customtip = document.querySelector('.custom-tip')
const tipscontainer = document.querySelector('.tip-container')
const resetbutton = document.querySelector('.reset-button')


let selectedTip = 0

generatebillbutton.addEventListener('click' ,() =>{
    const billamount = parseInt(billInputamount.value)
    const people = parseInt(noofpeople.value)
    // const customertip = parseInt(customtip.value)
    
    const totaltip = billamount * (selectedTip /100)
    
    
    const totalbillamount = billamount + totaltip
    const eachpersonbill = totalbillamount / people

    eachpersonamount.innerText = `Rs ${eachpersonbill}`
    totalbill.innerText = `Rs ${totalbillamount}`
    tipamount.innerText = `Rs ${totaltip}`

   resetbutton.disabled = false
   
})

tipscontainer.addEventListener('click', (e)=>{
    // [...tipscontainer].forEach(e),() => {
    //     e.classList.remove('selected')
    // }
    if(e.target !== tipscontainer) {
        [...tipscontainer.children].forEach((tips) =>{
            tips.classList.remove('selected') // we use foreach loop on tips container to remove selected class
        })
        //by applkying this logic we are able to select the tip through buttons
        e.target.classList.add('selected') 
        selectedTip = parseInt(e.target.innerText) // we use this to convert the tip into integer numeber
        console.log(selectedTip)
        customtip.value = ''
    }
})
// by this logic we are selecting the tip through custom tip input
customtip.addEventListener('input',()=>{
    selectedTip = parseInt(customtip.value);
    [...tipscontainer.children].forEach((tips) =>{
        tips.classList.remove('selected') // we use foreach loop on tips container to remove selected class
    })
})

resetbutton.addEventListener('click',()=>{
    selectedTip = 0
    billInputamount.value = ''
    customtip.value=''
    noofpeople.value=''
    eachpersonamount.innerText = ''
    totalbill.innerText = ''
    tipamount.innerText = ''
    ;[...tipscontainer.children].forEach((tips) =>{
        tips.classList.remove('selected') // we use foreach loop on tips container to remove selected class
        resetbutton.disabled = true


    })

})

noofpeople.addEventListener('click',()=>{
    generatebillbutton.disabled = false
})