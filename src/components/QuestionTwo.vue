<template>
    <section id="main">
        <!--question 2 div; if yes display message (check javascript)-->
        <div id="questionTwo">
            <p>Are you replacing an older LS300 or Raven XT cellular modem?</p>
            <div>
                <button id="q2yes" @click="$router.push('questionThree')">Yes</button>
            </div>
            <br>
            <div>
                <button id="q2no" @click="$router.push('questionThree')">No</button>
            </div>            
        </div>        
    </section>
</template>