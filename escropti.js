
function toSex() {
    
    document.getElementById('section').style.paddingBottom = '25px'
    var time = new Date()
    var year = time.getFullYear()
    var birth = document.getElementById('number').value //string -> numero
    var age = year - Number(birth)
    var ans = document.getElementById('res')
    var img = document.getElementById('screen')

    var fem = document.getElementById('female')
    var masc = document.getElementById('male')
    var outro = document.getElementById('other')

    if (birth.length == 0 || birth > year) {
        alert('TA ERRADO ISSO DAE TAOKEY')
    } else if (birth < 1920) {
        alert('TA QUERENDO ME LUDIBRIAR CÊRO?')
    } else {

        if (fem.checked) {
            if (age == 0) {
                ans.innerText = 'You were literally just born and you are 0 years old'
                img.setAttribute('src', 'femnewb.png')
            } else if (age <= 19) {
                ans.innerText = `You are a girl and you're ${age} years old`
                img.setAttribute('src', 'femchild.png')
            } else if (age <=60) {
                ans.innerText = `You are an adult woman and you're ${age} years old, dsclp o bozo;-;`
                img.setAttribute('src', 'femadult.png')
            } else if (age <=110) {
                ans.innerText = `You are an old woman and you're ${age} years old`
                img.setAttribute('src', 'femold.png')
            } 
        }

        if (masc.checked) {
            if (age == 0) {
                ans.innerText = 'You were literally just born and you are 0 years old'
                img.setAttribute('src', 'mascnewb.png')
            } else if (age <=19) {
                ans.innerText = `You are a boy and you're ${age} years old`
                img.setAttribute('src', 'mascchild.png')
            } else if (age <= 60) {
                ans.innerText = `You are an adult man and you're ${age} years old`
                img.setAttribute('src', 'mascadult.png')
            } else if (age <=110) {
                ans.innerText = `You are an old man and you're ${age} years old`
                img.setAttribute('src', 'mascold.png')
            }
        }

        if (outro.checked) {
            if (age == 0) {
                ans.innerText = 'You were literally just born and you are 0 years old'
                img.setAttribute('src', 'helnewb.png')
            } else if (age <=19) {
                ans.innerText = `You are little combat helicopter and you're ${age} years old`
                img.setAttribute('src', 'helchild.png')
            } else if (age <=60) {
                ans.innerText = `You are an adult combat helicopter and you're ${age} years old`
                img.setAttribute('src', 'heladult.png')
            } else if (age <=110) {
                ans.innerText = `You are an old combat helicopter and you you're ${age} years old`
                img.setAttribute('src', 'helold.jpg')
            }
        }
    }
}



