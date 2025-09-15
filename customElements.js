/**
 * Class which 
 */
class EmphasisText extends HTMLElement 
{
    delay = 0;
    animation = "";

    connectedCallback() {
        const textCopy = this.textContent;
        this.innerHTML = "";
        var processedContent = "";

        for (let i = 0; i < textCopy.length; i++) 
        {
            processedContent = "<span>" + textCopy[i] + "</span> ";
            this.innerHTML += processedContent;

            //this.lastElementChild.style.animationDuration = this.speed;
            this.lastElementChild.style.animation = this.animation;
            this.lastElementChild.style.position = "relative";
            this.lastElementChild.style.animationDelay = this.delay * i +"s";
        }         

    }
}


/**
 * Gives the text a 
 */
class WindyText extends EmphasisText
{
    delay = -0.3/4;
    animation =`shake
                2s 
                cubic-bezier(0.45, 0.05, 0.55, 0.95) 
                infinite 
                alternate`;
}

function InitCustomElements()
{
    DefineAnimations()

    customElements.define("emphasis-text", EmphasisText);
    customElements.define("windy-text", WindyText);
}

function DefineAnimations()
{
    let style = document.createElement('style');
    style.innerHTML = 
    `
    @keyframes shake
    {
        0%  { top: 2px;}
        25% { top: -4px; left: 1px;}
        50% { top: 1px; left: 1px;}
        75% { top: -2px;}
        100%{ top: 3px; left: -1px;}
    }

    @keyframes shift
    {
        0%  { top: -3px; left: -2px;}
        50% { top: 3px;}
        100%{ top: -3px; left: 2px;}
    }
    `;
    document.head.appendChild(style);
}
