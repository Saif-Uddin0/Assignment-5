
        let Hearts = document.getElementsByClassName('heart');
        let heartIncriss = document.getElementById('heart-plus');
        let heartValue = 0;
        let copyIconsBtn = document.querySelectorAll('.btn-copy');
        let copyIncress = document.getElementById('copy-btn-increase');
        let copyValue = 0;


        //heart increase
        for(let heart of Hearts){
                heart.addEventListener('click', function(){
                        heartValue ++;
                        heartIncriss.innerText = heartValue;
                })
                
        }


