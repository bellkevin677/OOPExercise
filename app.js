const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,

    quote: function () {
        return `Dishonor! Dishonor on your whole family!`;
    },
    storyline: function () {
        return `The movie ${this.title} is about ${this.main}.`;
    }
}

const tangled = {
    title: 'Tangled',
    main: `Rapunzel`,

    quote: function () {
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible duaghter! BEST DAY EVER!`;
    },

    storyline: function () {
        return `The movie ${this.title} is about ${this.main}.`
    }
}

function DisneyMovie(title, main) {
    this.title = title;
    this.main = main;
}

DisneyMovie.prototype.storyline = function () {
    return `The movie ${this.title} is about ${this.main}.`;
}

const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);

const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);

class DM {
    constructor(title, main) {
        this.title = title;
        this.main = main;
    }
    storyline() {
        return `The movie ${this.title} is about ${this.main}.`;
    }
    static loveDisneyMovies() {
        return `I Love Disney Movies`;
    }
}

const mulan2 = new DM(`Mulan`, `Fa Mulan`);

const tangled2 = new DM(`Tangled`, `Rapunzel`);

console.log(DM.loveDisneyMovies());

class DMCast extends DM {
    constructor(title, main, cast) {
        super(title, main);
        this.cast = cast;
    }
    static create(title, main, cast){
        return new DMCast(title, main, cast);
    }
}

const mulan3 = new DMCast(
    `Mulan`,
    `Fa Mulan`,
    {
        mulan: `Ming-Na Wen`,
        mushu: `Eddie Murphy`,
        shang: `BD Wong`,
        theEmperor: `Pat Morita`
    }
);

const repunzel3 = new DMCast(
    `Tangled`,
    `Rapunzel`,
    {
        rapunzel: `Mandy Moore`,
        flynnRider: `Zachary Levi`,
        motherGothel: `Donna Murphy`
    }
);



