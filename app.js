const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,

    quote: function(){
        return `Dishonor! Dishonor on your whole family!`;
    },
    storyline: function(){
        return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of Chins'a greatest heroines in the process.`;
    }
}

const tangled = {
    title: 'Tangled',
    main: `Rapunzel`,

    quote: function(){
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible duaghter! BEST DAY EVER!`;
    },

    storyline: function(){
        return `In ${this.title}, The magically long-haired ${this.main} has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.`
    }
}

function DisneyMovie(title, main){
    this.title = title
    this.main = main
}

DisneyMovie.prototype.mulan.storyline = function(){
    return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of Chins'a greatest heroines in the process.`;
}

DisneyMovie.prototype.tangled.storyline = function(){
    return `In ${this.title}, The magically long-haired ${this.main} has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.`
}

const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);

const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);

class DM{
    constructor(title, main){
        this.title = title;
        this.main = main;
    }
}