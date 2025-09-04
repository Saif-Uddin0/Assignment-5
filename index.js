
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

        //cll button
        
        const $ = (s) => document.querySelector(s);
        const $$ = (s) => document.querySelectorAll(s);

        let coins = parseInt($("#coin-box").textContent);
        
        const coinBox = $("#coin-box");
        const historyBox = $(".history-data");
        const clearBtn = $(".btn-clear");

        
        const updateCoins = () => (coinBox.textContent = coins);

        const getTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
};
        $$(".cll-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
        const Card = btn.closest("div.bg-white");
        const serviceName = Card.querySelector("h1").textContent;
        const serviceNumber = Card.querySelector("h3").textContent;

        if (coins < 20) {
        alert("Not enough coins! you need 20 coins to make a call");
        return;
        }

        alert(`Calling ${serviceName} at ${serviceNumber}`);
        coins -= 20; 
        updateCoins();

        
         let createDiv = document.createElement('div');
        createDiv.classList.add('bg-gray-100', 'p-2', 'flex', 'justify-between', 'items-center', 'mt-2');
        createDiv.innerHTML = `
                        <div class="w-2/3">
                        <h1 class="text-[14px] font-bold">${serviceName}</h1>
                        <P class="text-gray-400">${serviceNumber}</P>
                        </div>
                        <div class="time w-1/3">
                        <span class="text-[15px]">(${getTime()})</span>
                        </div>

        `;
        historyBox.appendChild(createDiv);
        });
        });

        //   copy function 
                copyIconsBtn.forEach( copyIcon => {
                copyIcon.addEventListener('click' , () => {
                let copyHotlineNumber = copyIcon.parentElement.parentElement.children[3].innerText;

                navigator.clipboard.writeText(copyHotlineNumber)
                alert(`${copyHotlineNumber} number has been copied`)
                console.log(copyHotlineNumber);
                copyValue++;
                copyIncress.innerText = copyValue;
            })
        })

        // Clear history
        clearBtn.addEventListener("click", () => {
        historyBox.innerHTML = "";
        });
