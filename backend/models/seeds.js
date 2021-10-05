const Drink = require("../models/Drink.js");
const mongoose = require("mongoose");

mongoose
    .connect(`mongodb+srv://Dario:Dario@cluster0.rexze.mongodb.net/FinalProject?retryWrites=true&w=majority`)
    .then((self) =>
        console.log(`Connected to the database: "${self.connection.name}"`)
    );

const drinks = [

    {
        "cockTailId": "11000",
        "name": "Mojito",
        "tags": [
            "IBA",
            "ContemporaryClassic",
            "Alcoholic",
            "USA",
            "Asia",
            "Vegan",
            "Citrus",
            "Brunch",
            "Hangover",
            "Mild"
        ],
        "instructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
        "image": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
        "otherImage": "https://pixabay.com/photos/cocktail-mojito-cocktail-recipe-5096281/",
        "ingredients": [
            "Light rum",
            "Lime",
            "Sugar",
            "Mint",
            "Soda water"
        ],
        "measurements": [
            "2-3 oz ",
            "Juice of 1 ",
            "2 tsp ",
            "2-4 "
        ]
    },
    {
        "cockTailId": "11001",
        "name": "Old Fashioned",
        "tags": [
            "IBA",
            "Classic",
            "Alcoholic",
            "Expensive",
            "Savory"
        ],
        "instructions": "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11001-Old-Fashioned-Cocktail",
        "ingredients": [
            "Bourbon",
            "Angostura bitters",
            "Sugar",
            "Water"
        ],
        "measurements": [
            "4.5 cL",
            "2 dashes",
            "1 cube",
            "dash"
        ]
    },
    {
        "cockTailId": "11002",
        "name": "Long Island Tea",
        "tags": [
            "Strong",
            "Asia",
            "StrongFlavor",
            "Brunch",
            "Vegetarian",
            "Sour"
        ],
        "instructions": "Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
        "otherImage": "https://pxhere.com/en/photo/1593200",
        "ingredients": [
            "Vodka",
            "Light rum",
            "Gin",
            "Tequila",
            "Lemon",
            "Coca-Cola"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "Juice of 1/2 ",
            "1 splash "
        ]
    },
    {
        "cockTailId": "11003",
        "name": "Negroni",
        "tags": [
            "IBA",
            "Classic"
        ],
        "instructions": "Stir into glass over ice, garnish and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11003",
        "ingredients": [
            "Gin",
            "Campari",
            "Sweet Vermouth"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11004",
        "name": "Whiskey Sour",
        "tags": [
            "IBA",
            "Classic",
            "Alcoholic",
            "ContemporaryClassic"
        ],
        "instructions": "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:15-09-26-RalfR-WLC-0191.jpg",
        "ingredients": [
            "Blended whiskey",
            "Lemon",
            "Powdered sugar",
            "Cherry",
            "Lemon"
        ],
        "measurements": [
            "2 oz ",
            "Juice of 1/2 ",
            "1/2 tsp ",
            "1 ",
            "1/2 slice "
        ]
    },
    {
        "cockTailId": "11005",
        "name": "Dry Martini",
        "tags": [
            "IBA",
            "Classic",
            "Christmas",
            "Alcoholic"
        ],
        "instructions": "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
        "image": "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11005",
        "ingredients": [
            "Gin",
            "Dry Vermouth",
            "Olive"
        ],
        "measurements": [
            "1 2/3 oz ",
            "1/3 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "11006",
        "name": "Daiquiri",
        "tags": [
            "IBA",
            "Classic",
            "Beach"
        ],
        "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Classic_Daiquiri_in_Cocktail_Glass.jpg",
        "ingredients": [
            "Light rum",
            "Lime",
            "Powdered sugar"
        ],
        "measurements": [
            "1 1/2 oz ",
            "Juice of 1/2 ",
            "1 tsp "
        ]
    },
    {
        "cockTailId": "11007",
        "name": "Margarita",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
        "ingredients": [
            "Tequila",
            "Triple sec",
            "Lime juice",
            "Salt"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11008",
        "name": "Manhattan",
        "tags": [
            "IBA",
            "Classic",
            "Alcoholic"
        ],
        "instructions": "Stirred over ice, strained into a chilled glass, garnished, and served up.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Oak_Fired_Manhattan_-_Stierch_1.jpg",
        "ingredients": [
            "Sweet Vermouth",
            "Bourbon",
            "Angostura bitters",
            "Ice",
            "Maraschino cherry",
            "Orange peel"
        ],
        "measurements": [
            "3/4 oz ",
            "2 1/2 oz Blended ",
            "dash ",
            "2 or 3 ",
            "1 ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11009",
        "name": "Moscow Mule",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
        "image": "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Moscow_Mule_at_Rye,_San_Francisco.jpg",
        "ingredients": [
            "Vodka",
            "Lime juice",
            "Ginger ale"
        ],
        "measurements": [
            "2 oz ",
            "2 oz ",
            "8 oz "
        ]
    },
    {
        "cockTailId": "11010",
        "name": "After Dinner Cocktail",
        "tags": [
            "DinnerParty"
        ],
        "instructions": "Shake all ingredients (except lime wedge) with ice and strain into a cocktail glass. Add the wedge of lime and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vtytxq1483387578.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11010",
        "ingredients": [
            "Apricot brandy",
            "Triple sec",
            "Lime",
            "Lime"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "Juice of 1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "11011",
        "name": "After Supper Cocktail",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/quyxwu1483387610.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11011",
        "ingredients": [
            "Triple sec",
            "Apricot brandy",
            "Lemon juice"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1/2 tsp "
        ]
    },
    {
        "cockTailId": "11012",
        "name": "Alabama Slammer",
        "tags": [
            "Summer"
        ],
        "instructions": "Pour all ingredients (except for lemon juice) over ice in a highball glass. Stir, add a dash of lemon juice, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/jntghf1606771886.jpg",
        "otherImage": "https://www.pxfuel.com/en/free-photo-eplac",
        "ingredients": [
            "Southern Comfort",
            "Amaretto",
            "Sloe gin",
            "Lemon juice"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1/2 oz ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "11013",
        "name": "Alaska Cocktail",
        "tags": [
            "Beach",
            "Chilli"
        ],
        "instructions": "Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg",
        "otherImage": null,
        "ingredients": [
            "Orange bitters",
            "Gin",
            "Yellow Chartreuse",
            "Lemon peel"
        ],
        "measurements": [
            "2 dashes ",
            "1 1/2 oz ",
            "3/4 oz ",
            "Twist of "
        ]
    },
    {
        "cockTailId": "11014",
        "name": "Alexander",
        "tags": [
            "IBA",
            "Classic",
            "Dairy"
        ],
        "instructions": "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg",
        "otherImage": "https://www.pxfuel.com/en/free-photo-expqp",
        "ingredients": [
            "Gin",
            "Creme de Cacao",
            "Light cream",
            "Nutmeg"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz white ",
            "2 oz "
        ]
    },
    {
        "cockTailId": "11016",
        "name": "Brandy Alexander",
        "tags": [
            "Nutty",
            "Dairy"
        ],
        "instructions": "Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/mlyk1i1606772340.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Brandy_Alexander_on_the_Rocks.jpg",
        "ingredients": [
            "Brandy",
            "Creme de Cacao",
            "Light cream",
            "Nutmeg"
        ],
        "measurements": [
            "1 oz ",
            "1 oz white ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11019",
        "name": "Alfie Cocktail",
        "tags": [
            "Alcoholic"
        ],
        "instructions": "Combine and shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ypxsqy1483387829.jpg",
        "otherImage": null,
        "ingredients": [
            "Lemon vodka",
            "Triple sec",
            "Pineapple juice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 dash ",
            "1 tblsp "
        ]
    },
    {
        "cockTailId": "11020",
        "name": "Algonquin",
        "tags": [],
        "instructions": "Combine and shake all ingredients with ice, strain contents into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uwryxx1483387873.jpg",
        "otherImage": null,
        "ingredients": [
            "Blended whiskey",
            "Dry Vermouth",
            "Pineapple juice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11021",
        "name": "Allegheny",
        "tags": [],
        "instructions": "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Top with the twist of lemon peel and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
        "otherImage": null,
        "ingredients": [
            "Dry Vermouth",
            "Bourbon",
            "Blackberry brandy",
            "Lemon juice",
            "Lemon peel"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 1/2 tsp ",
            "1 1/2 tsp ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11022",
        "name": "Allies Cocktail",
        "tags": [],
        "instructions": "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg",
        "otherImage": null,
        "ingredients": [
            "Dry Vermouth",
            "Gin",
            "Kummel"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1/2 tsp "
        ]
    },
    {
        "cockTailId": "11023",
        "name": "Almeria",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg",
        "otherImage": null,
        "ingredients": [
            "Dark rum",
            "Kahlua",
            "Egg white"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "11024",
        "name": "Almond Joy",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xutuqs1483388296.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Creme de Cacao",
            "Light cream"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz white ",
            "2 oz "
        ]
    },
    {
        "cockTailId": "11025",
        "name": "Amaretto And Cream",
        "tags": [],
        "instructions": "Shake well with cracked ice, strain contents into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/dj8n0r1504375018.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Light cream"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 1/2 oz "
        ]
    },
    {
        "cockTailId": "11026",
        "name": "Amaretto Mist",
        "tags": [],
        "instructions": "Pour amaretto in an old-fashioned glass over crushed ice. Add the wedge of lime and serve. (A wedge of lemon may be substituted for lime, if preferred.)",
        "image": "https://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Lime"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "11027",
        "name": "Amaretto Rose",
        "tags": [],
        "instructions": "Pour amaretto and lime juice over ice in a collins glass. Fill with club soda and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Lime juice",
            "Club soda"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "11028",
        "name": "Amaretto Stinger",
        "tags": [],
        "instructions": "Shake ingredients well with cracked ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vvop4w1493069934.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "White Creme de Menthe"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3/4 oz "
        ]
    },
    {
        "cockTailId": "11029",
        "name": "Amaretto Tea",
        "tags": [],
        "instructions": "Pour hot tea into a pousse-cafe glass, using a spoon in glass to prevent cracking. Add amaretto, but do not stir. Top with chilled whipped cream and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg",
        "otherImage": null,
        "ingredients": [
            "Tea",
            "Amaretto",
            "Whipped cream"
        ],
        "measurements": [
            "6 oz hot ",
            "2 oz ",
            "Chilled "
        ]
    },
    {
        "cockTailId": "11034",
        "name": "Angel Face",
        "tags": [
            "IBA",
            "Classic"
        ],
        "instructions": "Shake all ingredients with ice and strain contents into a cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vaukir1606772580.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:IBA_Cocktail_Angel_Face_(28068833805).jpg",
        "ingredients": [
            "Apricot brandy",
            "Apple brandy",
            "Gin"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11046",
        "name": "Applecar",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
        "otherImage": null,
        "ingredients": [
            "Applejack",
            "Triple sec",
            "Lemon juice"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11050",
        "name": "Apricot Lady",
        "tags": [
            "Cold"
        ],
        "instructions": "In a shaker half-filled with ice cubes, combine the rum, apricot brandy, triple sec, lemon juice, and egg white. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Garnish with the orange slice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7ityp11582579598.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Apricot brandy",
            "Triple sec",
            "Lemon juice",
            "Egg white",
            "Orange"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz ",
            "1 tsp ",
            "1/2 oz ",
            "1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "11052",
        "name": "Archbishop",
        "tags": [],
        "instructions": "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
        "image": "https://www.thecocktaildb.com/images/media/drink/4g6xds1582579703.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Wine",
            "Benedictine",
            "Lime"
        ],
        "measurements": [
            "2 oz ",
            "1 oz Green Ginger ",
            "1 tsp ",
            "1 "
        ]
    },
    {
        "cockTailId": "11053",
        "name": "Arise My Love",
        "tags": [],
        "instructions": "Put creme de menthe into a champagne flute. Fill with chilled champagne and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wyrrwv1441207432.jpg",
        "otherImage": null,
        "ingredients": [
            "Champagne",
            "Green Creme de Menthe"
        ],
        "measurements": [
            "Chilled ",
            "1 tsp "
        ]
    },
    {
        "cockTailId": "11054",
        "name": "Arthur Tompkins",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine the gin, Grand Marnier, and lemon juice. Shake well. Strain into a sour glass and garnish with the lemon twist.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7onfhz1493067921.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Grand Marnier",
            "Lemon juice",
            "Lemon peel"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "2 tsp ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11055",
        "name": "Artillery",
        "tags": [],
        "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg",
        "otherImage": null,
        "ingredients": [
            "Sweet Vermouth",
            "Gin",
            "Bitters"
        ],
        "measurements": [
            "1 1/2 tsp ",
            "1 1/2 oz ",
            "2 dashes "
        ]
    },
    {
        "cockTailId": "11060",
        "name": "Balmoral",
        "tags": [],
        "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vysuyq1441206297.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Sweet Vermouth",
            "Dry Vermouth",
            "Bitters"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "2 dashes "
        ]
    },
    {
        "cockTailId": "11064",
        "name": "Banana Daiquiri",
        "tags": [
            "Fruity"
        ],
        "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/k1xatq1504389300.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Triple sec",
            "Banana",
            "Lime juice",
            "Sugar",
            "Cherry"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 tblsp ",
            "1 ",
            "1 1/2 oz ",
            "1 tsp ",
            "1 "
        ]
    },
    {
        "cockTailId": "11084",
        "name": "Bermuda Highball",
        "tags": [],
        "instructions": "Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
        "image": "https://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg",
        "otherImage": null,
        "ingredients": [
            "Brandy",
            "Gin",
            "Dry Vermouth",
            "Carbonated water",
            "Lemon peel"
        ],
        "measurements": [
            "3/4 oz ",
            "3/4 oz ",
            "3/4 oz "
        ]
    },
    {
        "cockTailId": "11112",
        "name": "Bloody Maria",
        "tags": [
            "Breakfast",
            "Brunch",
            "Hangover"
        ],
        "instructions": "Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg",
        "otherImage": null,
        "ingredients": [
            "Tequila",
            "Tomato juice",
            "Lemon juice",
            "Tabasco sauce",
            "Celery salt",
            "Lemon"
        ],
        "measurements": [
            "1 oz ",
            "2 oz ",
            "1 dash ",
            "1 dash ",
            "1 dash ",
            "1 slice "
        ]
    },
    {
        "cockTailId": "11113",
        "name": "Bloody Mary",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Stirring gently, pour all ingredients into highball glass. Garnish.",
        "image": "https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11113-Bloody-Mary",
        "ingredients": [
            "Vodka",
            "Tomato juice",
            "Lemon juice",
            "Worcestershire sauce",
            "Tabasco sauce",
            "Lime"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3 oz ",
            "1 dash ",
            "1/2 tsp ",
            "2-3 drops ",
            "1 wedge "
        ]
    },
    {
        "cockTailId": "11117",
        "name": "Blue Lagoon",
        "tags": [],
        "instructions": "Pour vodka and curacao over ice in a highball glass. Fill with lemonade, top with the cherry, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/5wm4zo1582579154.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Blue Curacao",
            "Lemonade",
            "Cherry"
        ],
        "measurements": [
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11118",
        "name": "Blue Margarita",
        "tags": [],
        "instructions": "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
        "otherImage": null,
        "ingredients": [
            "Tequila",
            "Blue Curacao",
            "Lime juice",
            "Salt"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz ",
            "1 oz ",
            "Coarse "
        ]
    },
    {
        "cockTailId": "11119",
        "name": "Blue Mountain",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes.",
        "image": "https://www.thecocktaildb.com/images/media/drink/bih7ln1582485506.jpg",
        "otherImage": null,
        "ingredients": [
            "Añejo rum",
            "Tia maria",
            "Vodka",
            "Orange juice",
            "Lemon juice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "1 oz ",
            "1 tsp "
        ]
    },
    {
        "cockTailId": "11120",
        "name": "Bluebird",
        "tags": [],
        "instructions": "In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/5jhyd01582579843.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Triple sec",
            "Blue Curacao",
            "Bitters",
            "Maraschino cherry",
            "Lemon peel"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "2 dashes ",
            "1 ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11121",
        "name": "Bobby Burns Cocktail",
        "tags": [],
        "instructions": "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/km6se51484411608.jpg",
        "otherImage": null,
        "ingredients": [
            "Sweet Vermouth",
            "Scotch",
            "Benedictine",
            "Lemon peel"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 1/2 oz ",
            "1 1/4 tsp ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11124",
        "name": "Boomerang",
        "tags": [],
        "instructions": "In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Dry Vermouth",
            "Bitters",
            "Maraschino liqueur",
            "Maraschino cherry"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "2 dashes ",
            "1/2 tsp ",
            "1 "
        ]
    },
    {
        "cockTailId": "11128",
        "name": "Boston Sidecar",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Brandy",
            "Triple sec",
            "Lime"
        ],
        "measurements": [
            "3/4 oz ",
            "3/4 oz ",
            "3/4 oz ",
            "Juice of 1/2 "
        ]
    },
    {
        "cockTailId": "11129",
        "name": "Boston Sour",
        "tags": [],
        "instructions": "Shake juice of lemon, powdered sugar, blended whiskey, and egg white with cracked ice and strain into a whiskey sour glass. Add the slice of lemon, top with the cherry, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/kxlgbi1504366100.jpg",
        "otherImage": null,
        "ingredients": [
            "Blended whiskey",
            "Lemon",
            "Powdered sugar",
            "Egg white",
            "Lemon",
            "Cherry"
        ],
        "measurements": [
            "2 oz ",
            "Juice of 1/2 ",
            "1 tsp ",
            "1 ",
            "1 slice ",
            "1 "
        ]
    },
    {
        "cockTailId": "11145",
        "name": "Classic Old-Fashioned",
        "tags": [],
        "instructions": "In an old-fashioned glass, muddle the bitters and water into the sugar cube, using the back of a teaspoon. Almost fill the glass with ice cubes and add the bourbon. Garnish with the orange slice and the cherry. Serve with a swizzle stick.",
        "image": "https://www.thecocktaildb.com/images/media/drink/w8cxqv1582485254.jpg",
        "otherImage": null,
        "ingredients": [
            "Bitters",
            "Water",
            "Sugar",
            "Bourbon",
            "Orange",
            "Maraschino cherry"
        ],
        "measurements": [
            "3 dashes ",
            "1 tsp ",
            "1 ",
            "3 oz ",
            "1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "11146",
        "name": "Bourbon Sling",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine the sugar, water, lemon juice, and bourbon. Shake well. Strain well. Strain into a highball glass. Garnish with the lemon twist.",
        "image": "https://www.thecocktaildb.com/images/media/drink/3s36ql1504366260.jpg",
        "otherImage": null,
        "ingredients": [
            "Sugar",
            "Water",
            "Lemon juice",
            "Bourbon",
            "Lemon peel"
        ],
        "measurements": [
            "1 tsp superfine ",
            "2 tsp ",
            "1 oz ",
            "2 oz ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11147",
        "name": "Bourbon Sour",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, and sugar. Shake well. Strain into a whiskey sour glass, garnish with the orange slice and cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg",
        "otherImage": null,
        "ingredients": [
            "Bourbon",
            "Lemon juice",
            "Sugar",
            "Orange",
            "Maraschino cherry"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1/2 tsp superfine ",
            "1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "11149",
        "name": "Boxcar",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Triple sec",
            "Lemon juice",
            "Grenadine",
            "Egg white"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz ",
            "1 tsp ",
            "1/2 tsp ",
            "1 "
        ]
    },
    {
        "cockTailId": "11157",
        "name": "Brandy Cobbler",
        "tags": [],
        "instructions": "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the brandy. Stir well. Garnish with the cherry and the orange and lemon slices.",
        "image": "https://www.thecocktaildb.com/images/media/drink/5xgu591582580586.jpg",
        "otherImage": null,
        "ingredients": [
            "Sugar",
            "Club soda",
            "Lemon",
            "Brandy",
            "Maraschino cherry",
            "Orange"
        ],
        "measurements": [
            "1 tsp superfine ",
            "3 oz ",
            "1 ",
            "2 oz ",
            "1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "11164",
        "name": "Brandy Flip",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine the brandy, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg.",
        "image": "https://www.thecocktaildb.com/images/media/drink/6ty09d1504366461.jpg",
        "otherImage": null,
        "ingredients": [
            "Brandy",
            "Egg",
            "Sugar",
            "Light cream",
            "Nutmeg"
        ],
        "measurements": [
            "2 oz ",
            "1 whole ",
            "1 tsp superfine ",
            "1/2 oz ",
            "1/8 tsp grated "
        ]
    },
    {
        "cockTailId": "11170",
        "name": "Brandy Sour",
        "tags": [],
        "instructions": "Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/b1bxgq1582484872.jpg",
        "otherImage": null,
        "ingredients": [
            "Brandy",
            "Lemon",
            "Powdered sugar",
            "Lemon",
            "Cherry"
        ],
        "measurements": [
            "2 oz ",
            "Juice of 1/2 ",
            "1/2 tsp ",
            "1/2 slice ",
            "1 "
        ]
    },
    {
        "cockTailId": "11202",
        "name": "Caipirinha",
        "tags": [
            "ContemporaryClassic",
            "IBA"
        ],
        "instructions": "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça.",
        "image": "https://www.thecocktaildb.com/images/media/drink/jgvn7p1582484435.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11202-Caipirinha",
        "ingredients": [
            "Sugar",
            "Lime",
            "Cachaca"
        ],
        "measurements": [
            "2 tsp",
            "1 ",
            "2 1/2 oz "
        ]
    },
    {
        "cockTailId": "11205",
        "name": "California Lemonade",
        "tags": [],
        "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over shaved ice. Fill with carbonated water and stir. Decorate with slices of orange and lemon. Add the cherry and serve with a straw.",
        "image": "https://www.thecocktaildb.com/images/media/drink/q5z4841582484168.jpg",
        "otherImage": null,
        "ingredients": [
            "Blended whiskey",
            "Lemon",
            "Lime",
            "Powdered sugar",
            "Grenadine",
            "Carbonated water"
        ],
        "measurements": [
            "2 oz ",
            "Juice of 1 ",
            "Juice of 1 ",
            "1 tblsp",
            "1/4 tsp"
        ]
    },
    {
        "cockTailId": "11222",
        "name": "Casa Blanca",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/usspxq1441553762.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Triple sec",
            "Lime juice",
            "Maraschino liqueur"
        ],
        "measurements": [
            "2 oz ",
            "1 1/2 tsp ",
            "1 1/2 tsp ",
            "1 1/2 tsp "
        ]
    },
    {
        "cockTailId": "11224",
        "name": "Casino Royale",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Lemon juice",
            "Maraschino liqueur",
            "Orange bitters",
            "Egg yolk"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "1 tsp ",
            "1 dash ",
            "1 "
        ]
    },
    {
        "cockTailId": "11227",
        "name": "Champagne Cocktail",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/t5pv461606773026.jpg",
        "otherImage": "https://pixabay.com/de/photos/champagner-cocktail-french-75-5374793/",
        "ingredients": [
            "Champagne",
            "Sugar",
            "Bitters",
            "Lemon peel",
            "Cognac"
        ],
        "measurements": [
            "Chilled ",
            "1 piece ",
            "2 dashes ",
            "1 twist of ",
            "1 dash"
        ]
    },
    {
        "cockTailId": "11239",
        "name": "Cherry Rum",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/twsuvr1441554424.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Cherry brandy",
            "Light cream"
        ],
        "measurements": [
            "1 1/4 oz ",
            "1 1/2 tsp ",
            "1 tblsp "
        ]
    },
    {
        "cockTailId": "11243",
        "name": "Chocolate Black Russian",
        "tags": [],
        "instructions": "Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yyvywx1472720879.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Vodka",
            "Chocolate ice-cream"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz ",
            "5 oz "
        ]
    },
    {
        "cockTailId": "11251",
        "name": "City Slicker",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/dazdlg1504366949.jpg",
        "otherImage": null,
        "ingredients": [
            "Brandy",
            "Triple sec",
            "Lemon juice"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "1 tblsp "
        ]
    },
    {
        "cockTailId": "11255",
        "name": "Clove Cocktail",
        "tags": [],
        "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qxvtst1461867579.jpg",
        "otherImage": null,
        "ingredients": [
            "Sweet Vermouth",
            "Sloe gin",
            "Wine"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz ",
            "1/2 oz Muscatel "
        ]
    },
    {
        "cockTailId": "11288",
        "name": "Cuba Libre",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wmkbfj1606853905.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Cuba_Libre.jpg",
        "ingredients": [
            "Light rum",
            "Lime",
            "Coca-Cola"
        ],
        "measurements": [
            "2 oz ",
            "Juice of 1/2 "
        ]
    },
    {
        "cockTailId": "11320",
        "name": "Dragonfly",
        "tags": [],
        "instructions": "In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uc63bh1582483589.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Ginger ale",
            "Lime"
        ],
        "measurements": [
            "1 1/2 oz ",
            "4 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "11324",
        "name": "Dry Rob Roy",
        "tags": [],
        "instructions": "In a mixing glass half-filled with ice cubes, combine the Scotch and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
        "image": "https://www.thecocktaildb.com/images/media/drink/typuyq1439456976.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Dry Vermouth",
            "Lemon peel"
        ],
        "measurements": [
            "2 1/2 oz ",
            "1 1/2 tsp ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11326",
        "name": "Dubonnet Cocktail",
        "tags": [],
        "instructions": "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/pfz3hz1582483111.jpg",
        "otherImage": null,
        "ingredients": [
            "Dubonnet Rouge",
            "Gin",
            "Bitters",
            "Lemon peel"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3/4 oz ",
            "1 dash ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11338",
        "name": "English Highball",
        "tags": [],
        "instructions": "Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
        "image": "https://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg",
        "otherImage": null,
        "ingredients": [
            "Brandy",
            "Gin",
            "Sweet Vermouth",
            "Carbonated water",
            "Lemon peel"
        ],
        "measurements": [
            "3/4 oz ",
            "3/4 oz ",
            "3/4 oz "
        ]
    },
    {
        "cockTailId": "11339",
        "name": "English Rose Cocktail",
        "tags": [],
        "instructions": "Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg",
        "otherImage": null,
        "ingredients": [
            "Apricot brandy",
            "Gin",
            "Dry Vermouth",
            "Grenadine",
            "Lemon juice",
            "Cherry"
        ],
        "measurements": [
            "3/4 oz ",
            "1 1/2 oz ",
            "3/4 oz ",
            "1 tsp ",
            "1/4 tsp ",
            "1 "
        ]
    },
    {
        "cockTailId": "11368",
        "name": "Flying Dutchman",
        "tags": [],
        "instructions": "In an old-fashioned glass almost filled with ice cubes, combine the gin and triple sec. Stir well.",
        "image": "https://www.thecocktaildb.com/images/media/drink/mwko4q1582482903.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Triple sec"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "11369",
        "name": "Flying Scotchman",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/q53l911582482518.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Sweet Vermouth",
            "Bitters",
            "Sugar syrup"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 dash ",
            "1/4 tsp "
        ]
    },
    {
        "cockTailId": "11375",
        "name": "Foxy Lady",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/r9cz3q1504519844.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Creme de Cacao",
            "Light cream"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "2 oz "
        ]
    },
    {
        "cockTailId": "11382",
        "name": "Frisco Sour",
        "tags": [],
        "instructions": "Shake all ingredients (except slices of lemon and lime) with ice and strain into a whiskey sour glass. Decorate with the slices of lemon and lime and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/acuvjz1582482022.jpg",
        "otherImage": null,
        "ingredients": [
            "Blended whiskey",
            "Benedictine",
            "Lemon",
            "Lime",
            "Lemon",
            "Lime"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "Juice of 1/4 ",
            "Juice of 1/2 ",
            "1 slice ",
            "1 slice "
        ]
    },
    {
        "cockTailId": "11387",
        "name": "Frozen Daiquiri",
        "tags": [],
        "instructions": "Combine all ingredients (except for the cherry) in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7oyrj91504884412.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Triple sec",
            "Lime juice",
            "Sugar",
            "Cherry",
            "Ice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 tblsp ",
            "1 1/2 oz ",
            "1 tsp ",
            "1 ",
            "1 cup crushed "
        ]
    },
    {
        "cockTailId": "11390",
        "name": "Frozen Mint Daiquiri",
        "tags": [],
        "instructions": "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/jrhn1q1504884469.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Lime juice",
            "Mint",
            "Sugar"
        ],
        "measurements": [
            "2 oz ",
            "1 tblsp ",
            "6 ",
            "1 tsp "
        ]
    },
    {
        "cockTailId": "11391",
        "name": "Frozen Pineapple Daiquiri",
        "tags": [],
        "instructions": "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a cocktail glass and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/k3aecd1582481679.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Pineapple",
            "Lime juice",
            "Sugar"
        ],
        "measurements": [
            "1 1/2 oz ",
            "4 chunks ",
            "1 tblsp ",
            "1/2 tsp "
        ]
    },
    {
        "cockTailId": "11396",
        "name": "Gentleman's Club",
        "tags": [],
        "instructions": "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
        "image": "https://www.thecocktaildb.com/images/media/drink/k2r7wv1582481454.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Brandy",
            "Sweet Vermouth",
            "Club soda"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11403",
        "name": "Gin And Tonic",
        "tags": [],
        "instructions": "Pour the gin and the tonic water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.",
        "image": "https://www.thecocktaildb.com/images/media/drink/z0omyp1582480573.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Tonic water",
            "Lime"
        ],
        "measurements": [
            "2 oz ",
            "5 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "11407",
        "name": "Gin Cooler",
        "tags": [],
        "instructions": "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add gin. Fill with carbonated water and stir. Add the lemon peel and the orange spiral so that the end of the orange spiral dangles over rim of glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/678xt11582481163.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Carbonated water",
            "Powdered sugar",
            "Orange spiral",
            "Lemon peel"
        ],
        "measurements": [
            "2 oz "
        ]
    },
    {
        "cockTailId": "11408",
        "name": "Gin Daisy",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine the gin, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/z6e22f1582581155.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Lemon juice",
            "Sugar",
            "Grenadine",
            "Maraschino cherry",
            "Orange"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1/2 tsp superfine ",
            "1/2 tsp ",
            "1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "11410",
        "name": "Gin Fizz",
        "tags": [
            "IBA",
            "Classic"
        ],
        "instructions": "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
        "image": "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:15-09-26-RalfR-WLC-0032.jpg",
        "ingredients": [
            "Gin",
            "Lemon",
            "Powdered sugar",
            "Carbonated water"
        ],
        "measurements": [
            "2 oz ",
            "Juice of 1/2 ",
            "1 tsp "
        ]
    },
    {
        "cockTailId": "11415",
        "name": "Gin Sling",
        "tags": [],
        "instructions": "Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/8cl9sm1582581761.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11415",
        "ingredients": [
            "Gin",
            "Lemon",
            "Powdered sugar",
            "Water",
            "Orange peel"
        ],
        "measurements": [
            "2 oz ",
            "Juice of 1/2 ",
            "1 tsp ",
            "1 tsp ",
            "Twist of "
        ]
    },
    {
        "cockTailId": "11416",
        "name": "Gin Smash",
        "tags": [
            "Citrus",
            "StrongFlavor"
        ],
        "instructions": "Muddle sugar with carbonated water and mint sprigs in an old-fashioned glass. Add gin and 1 ice cube. Stir, add the orange slice and the cherry, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/iprva61606768774.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Gin_Basil_Smash.jpg",
        "ingredients": [
            "Gin",
            "Carbonated water",
            "Sugar",
            "Mint",
            "Orange",
            "Cherry"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1 cube ",
            "4 ",
            "1 slice ",
            "1 "
        ]
    },
    {
        "cockTailId": "11417",
        "name": "Gin Sour",
        "tags": [
            "Sour"
        ],
        "instructions": "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/noxp7e1606769224.jpg",
        "otherImage": "https://pixabay.com/photos/gin-and-tonic-gin-sour-cocktail-4499713/",
        "ingredients": [
            "Gin",
            "Lemon juice",
            "Sugar",
            "Orange",
            "Maraschino cherry"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1/2 tsp superfine ",
            "1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "11418",
        "name": "Gin Squirt",
        "tags": [],
        "instructions": "Stir gin, grenadine, and powdered sugar with ice and strain into a highball glass over ice cubes. Fill with carbonated water and stir. Decorate with the pineapple chunks and the strawberries and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xrbhz61504883702.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Grenadine",
            "Powdered sugar",
            "Pineapple",
            "Strawberries",
            "Carbonated water"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 tsp ",
            "1 tblsp ",
            "3 chunks",
            "2 "
        ]
    },
    {
        "cockTailId": "11419",
        "name": "Gin Swizzle",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine the lime juice, sugar, gin, and bitters. Shake well. Almost fill a colling glass with ice cubes. Stir until the glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sybce31504884026.jpg",
        "otherImage": null,
        "ingredients": [
            "Lime juice",
            "Sugar",
            "Gin",
            "Bitters",
            "Club soda"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 tsp superfine ",
            "2 oz ",
            "1 dash ",
            "3 oz "
        ]
    },
    {
        "cockTailId": "11420",
        "name": "Gin Toddy",
        "tags": [],
        "instructions": "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/jxstwf1582582101.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Water",
            "Powdered sugar",
            "Lemon peel"
        ],
        "measurements": [
            "2 oz ",
            "2 tsp ",
            "1/2 tsp ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11422",
        "name": "Godchild",
        "tags": [],
        "instructions": "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/m5nhtr1504820829.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Amaretto",
            "Heavy cream"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11423",
        "name": "Godfather",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
        "image": "https://www.thecocktaildb.com/images/media/drink/e5zgao1582582378.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11423-Godfather",
        "ingredients": [
            "Scotch",
            "Amaretto"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3/4 oz "
        ]
    },
    {
        "cockTailId": "11424",
        "name": "Godmother",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Pour vodka and amaretto into an old-fashioned glass over ice and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/quksqg1582582597.jpg",
        "otherImage": "https://www.thecocktaildb.com/drink/11424-Godmother",
        "ingredients": [
            "Vodka",
            "Amaretto"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3/4 oz "
        ]
    },
    {
        "cockTailId": "11433",
        "name": "Grass Skirt",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine the gin, triple sec, pineapple juice, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the pineapple slice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qyvprp1473891585.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Triple sec",
            "Pineapple juice",
            "Grenadine",
            "Pineapple"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz ",
            "1 oz ",
            "1/2 tsp ",
            "1 "
        ]
    },
    {
        "cockTailId": "11462",
        "name": "Harvey Wallbanger",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Stir the vodka and orange juice with ice in the glass, then float the Galliano on top. Garnish and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7os4gs1606854357.jpg",
        "otherImage": "https://pxhere.com/en/photo/1435855",
        "ingredients": [
            "Vodka",
            "Galliano",
            "Orange juice"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz ",
            "4 oz "
        ]
    },
    {
        "cockTailId": "11470",
        "name": "Havana Cocktail",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/59splc1504882899.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Pineapple juice",
            "Lemon juice"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 tsp "
        ]
    },
    {
        "cockTailId": "11472",
        "name": "Hawaiian Cocktail",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ujoh9x1504882987.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Triple sec",
            "Pineapple juice"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "1 tblsp "
        ]
    },
    {
        "cockTailId": "11476",
        "name": "Highland Fling Cocktail",
        "tags": [],
        "instructions": "Stir all ingredients (except olive) with ice and strain into a cocktail glass. Add the olive and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/0bkwca1492975553.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Sweet Vermouth",
            "Orange bitters",
            "Olive"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3/4 oz ",
            "2 dashes ",
            "1 "
        ]
    },
    {
        "cockTailId": "11524",
        "name": "Imperial Fizz",
        "tags": [],
        "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/zj1usl1504884548.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Blended whiskey",
            "Lemon",
            "Powdered sugar",
            "Carbonated water"
        ],
        "measurements": [
            "1/2 oz ",
            "1 1/2 oz ",
            "Juice of 1/2 ",
            "1 tsp "
        ]
    },
    {
        "cockTailId": "11528",
        "name": "Irish Spring",
        "tags": [],
        "instructions": "Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes. Garnish with the slice of orange, add the cherry on top, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sot8v41504884783.jpg",
        "otherImage": null,
        "ingredients": [
            "Irish whiskey",
            "Peach brandy",
            "Orange juice",
            "Sweet and sour",
            "Orange",
            "Cherry"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz ",
            "1 oz ",
            "1 oz ",
            "1 slice ",
            "1 "
        ]
    },
    {
        "cockTailId": "11542",
        "name": "Jack Rose Cocktail",
        "tags": [
            "Beach"
        ],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uuqqrv1439907068.jpg",
        "otherImage": null,
        "ingredients": [
            "Apple brandy",
            "Grenadine",
            "Lime"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 tsp ",
            "Juice of 1/2 "
        ]
    },
    {
        "cockTailId": "11558",
        "name": "Japanese Fizz",
        "tags": [],
        "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/37vzv11504884831.jpg",
        "otherImage": null,
        "ingredients": [
            "Blended whiskey",
            "Lemon",
            "Powdered sugar",
            "Port",
            "Egg white",
            "Carbonated water"
        ],
        "measurements": [
            "1 1/2 oz ",
            "Juice of 1/2 ",
            "1 tsp ",
            "1 tblsp",
            "1 "
        ]
    },
    {
        "cockTailId": "11566",
        "name": "Jewel Of The Nile",
        "tags": [],
        "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/hx4nrb1504884947.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Green Chartreuse",
            "Yellow Chartreuse"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "11580",
        "name": "John Collins",
        "tags": [
            "IBA"
        ],
        "instructions": "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish. Add a dash of Angostura bitters.",
        "image": "https://www.thecocktaildb.com/images/media/drink/0t4bv71606854479.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:IBA_Cocktail_John_Collins_(29221732881).jpg",
        "ingredients": [
            "Bourbon",
            "Lemon juice",
            "Sugar",
            "Club soda",
            "Maraschino cherry",
            "Orange"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1 tsp superfine ",
            "3 oz ",
            "1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "11600",
        "name": "Kamikaze",
        "tags": [
            "IBA",
            "NewEra"
        ],
        "instructions": "Shake all ingredients together with ice. Strain into glass, garnish and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/d7ff7u1606855412.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Kamikaze-cocktail.jpg",
        "ingredients": [
            "Vodka",
            "Triple sec",
            "Lime juice"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11602",
        "name": "Kentucky B And B",
        "tags": [],
        "instructions": "Pour the bourbon and Benedictine into a brandy snifter.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sqxsxp1478820236.jpg",
        "otherImage": null,
        "ingredients": [
            "Bourbon",
            "Benedictine"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "11604",
        "name": "Kentucky Colonel",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes combine the courbon and Benedictine. Shake and strain into a cocktail glass. Garnish with the lemon twist.",
        "image": "https://www.thecocktaildb.com/images/media/drink/utqwpu1478820348.jpg",
        "otherImage": null,
        "ingredients": [
            "Bourbon",
            "Benedictine",
            "Lemon peel"
        ],
        "measurements": [
            "3 oz ",
            "1/2 oz ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11634",
        "name": "Lady Love Fizz",
        "tags": [],
        "instructions": "Shake all ingredients (except carbonated water) with ice and strain into a cocktail glass over two ice cubes. Fill with carbonated water, stir, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/20d63k1504885263.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Light cream",
            "Powdered sugar",
            "Lemon",
            "Egg white",
            "Carbonated water"
        ],
        "measurements": [
            "2 oz ",
            "2 tsp ",
            "1 tsp ",
            "Juice of 1/2",
            "1 "
        ]
    },
    {
        "cockTailId": "11658",
        "name": "Loch Lomond",
        "tags": [],
        "instructions": "In a mixing glass half-filled with ice cubes, combine the Scotch, Drambuie, and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Drambuie",
            "Dry Vermouth",
            "Lemon peel"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "11662",
        "name": "London Town",
        "tags": [],
        "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rpsrqv1468923507.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Maraschino liqueur",
            "Orange bitters"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "2 dashes "
        ]
    },
    {
        "cockTailId": "11664",
        "name": "Lone Tree Cocktail",
        "tags": [],
        "instructions": "Stir ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tsxpty1468923417.jpg",
        "otherImage": null,
        "ingredients": [
            "Sweet Vermouth",
            "Gin"
        ],
        "measurements": [
            "3/4 oz ",
            "1 1/2 oz "
        ]
    },
    {
        "cockTailId": "11666",
        "name": "Lone Tree Cooler",
        "tags": [],
        "instructions": "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wsyqry1479298485.jpg",
        "otherImage": null,
        "ingredients": [
            "Carbonated water",
            "Gin",
            "Dry Vermouth",
            "Powdered sugar",
            "Orange spiral",
            "Lemon peel"
        ],
        "measurements": []
    },
    {
        "cockTailId": "11670",
        "name": "Lord And Lady",
        "tags": [],
        "instructions": "Pour the rum and Tia Maria into an old-fashioned glass almost filled with ice cubes. Stir well.",
        "image": "https://www.thecocktaildb.com/images/media/drink/quwrys1468923219.jpg",
        "otherImage": null,
        "ingredients": [
            "Dark rum",
            "Tia maria"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "11690",
        "name": "Mai Tai",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.",
        "image": "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Mai_Tai_(16304400706).jpg",
        "ingredients": [
            "Light rum",
            "Orgeat syrup",
            "Triple sec",
            "Sweet and sour",
            "Cherry"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "1 1/2 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "11720",
        "name": "Martinez Cocktail",
        "tags": [],
        "instructions": "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wwxwvr1439906452.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Dry Vermouth",
            "Triple sec",
            "Orange bitters",
            "Cherry"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1/4 tsp ",
            "1 dash ",
            "1 "
        ]
    },
    {
        "cockTailId": "11766",
        "name": "Midnight Cowboy",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vsxxwy1441208133.jpg",
        "otherImage": null,
        "ingredients": [
            "Bourbon",
            "Dark rum",
            "Heavy cream"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "11798",
        "name": "Monkey Wrench",
        "tags": [],
        "instructions": "Pour all of the ingredients into an old-fashioned glass almost filled with ice cubes. Stir well.",
        "image": "https://www.thecocktaildb.com/images/media/drink/bw2noj1582473243.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Grapefruit juice",
            "Bitters"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3 oz ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "11872",
        "name": "Orgasm",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg",
        "otherImage": null,
        "ingredients": [
            "Creme de Cacao",
            "Amaretto",
            "Triple sec",
            "Vodka",
            "Light cream"
        ],
        "measurements": [
            "1/2 oz white ",
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11959",
        "name": "Poppy Cocktail",
        "tags": [],
        "instructions": "Shake ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/cslw1w1504389915.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Creme de Cacao"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3/4 oz white "
        ]
    },
    {
        "cockTailId": "11961",
        "name": "Port And Starboard",
        "tags": [],
        "instructions": "Pour carefully into a pousse-cafe glass, so that creme de menthe floats on grenadine. Serve without mixing.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wxvupx1441553911.jpg",
        "otherImage": null,
        "ingredients": [
            "Grenadine",
            "Green Creme de Menthe"
        ],
        "measurements": [
            "1 tblsp ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "11963",
        "name": "Port Wine Cocktail",
        "tags": [],
        "instructions": "Stir ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qruprq1441553976.jpg",
        "otherImage": null,
        "ingredients": [
            "Port",
            "Brandy"
        ],
        "measurements": [
            "2 1/2 oz ",
            "1/2 tsp "
        ]
    },
    {
        "cockTailId": "11965",
        "name": "Port Wine Flip",
        "tags": [],
        "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vrprxu1441553844.jpg",
        "otherImage": null,
        "ingredients": [
            "Port",
            "Light cream",
            "Powdered sugar",
            "Egg",
            "Nutmeg"
        ],
        "measurements": [
            "1 1/2 oz ",
            "2 tsp ",
            "1 tsp ",
            "1 whole "
        ]
    },
    {
        "cockTailId": "11983",
        "name": "Quaker's Cocktail",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Brandy",
            "Lemon",
            "Raspberry syrup"
        ],
        "measurements": [
            "3/4 oz ",
            "3/4 oz ",
            "Juice of 1/4 ",
            "2 tsp "
        ]
    },
    {
        "cockTailId": "11985",
        "name": "Quarter Deck Cocktail",
        "tags": [],
        "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qrwvps1478963017.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Sherry",
            "Lime"
        ],
        "measurements": [
            "1 1/2 ",
            "1/3 oz cream ",
            "Juice of 1/2 "
        ]
    },
    {
        "cockTailId": "11987",
        "name": "Queen Bee",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rvvpxu1478963194.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee brandy",
            "Lime vodka",
            "Sherry"
        ],
        "measurements": [
            "1 oz ",
            "1 1/2 oz ",
            "1/2 oz cream "
        ]
    },
    {
        "cockTailId": "11989",
        "name": "Queen Charlotte",
        "tags": [],
        "instructions": "Pour red wine and grenadine into a collins glass over ice cubes. Fill with lemon-lime soda, stir, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vqruyt1478963249.jpg",
        "otherImage": null,
        "ingredients": [
            "Red wine",
            "Grenadine",
            "Lemon-lime soda"
        ],
        "measurements": [
            "2 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "11991",
        "name": "Queen Elizabeth",
        "tags": [],
        "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vpqspv1478963339.jpg",
        "otherImage": null,
        "ingredients": [
            "Dry Vermouth",
            "Gin",
            "Benedictine"
        ],
        "measurements": [
            "1/2 oz ",
            "1 1/2 oz ",
            "1 1/2 tsp "
        ]
    },
    {
        "cockTailId": "11993",
        "name": "Quentin",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
        "image": "https://www.thecocktaildb.com/images/media/drink/spxtqp1478963398.jpg",
        "otherImage": null,
        "ingredients": [
            "Dark rum",
            "Kahlua",
            "Light cream",
            "Nutmeg"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "1 oz ",
            "1/8 tsp grated "
        ]
    },
    {
        "cockTailId": "12067",
        "name": "Rum Cobbler",
        "tags": [],
        "instructions": "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the rum. Stir well. Garnish with the cherry and the orange and lemon slices.",
        "image": "https://www.thecocktaildb.com/images/media/drink/5vh9ld1504390683.jpg",
        "otherImage": null,
        "ingredients": [
            "Sugar",
            "Club soda",
            "Lemon",
            "Dark rum",
            "Maraschino cherry",
            "Orange"
        ],
        "measurements": [
            "1 tsp superfine ",
            "3 oz ",
            "1 ",
            "2 oz ",
            "1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "12071",
        "name": "Rum Cooler",
        "tags": [],
        "instructions": "Pour the rum and soda into a collins glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.",
        "image": "https://www.thecocktaildb.com/images/media/drink/2hgwsb1504888674.jpg",
        "otherImage": null,
        "ingredients": [
            "Rum",
            "Lemon-lime soda",
            "Lemon"
        ],
        "measurements": [
            "2 oz light or dark ",
            "4 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "12087",
        "name": "Rum Milk Punch",
        "tags": [],
        "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/w64lqm1504888810.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Milk",
            "Powdered sugar",
            "Nutmeg"
        ],
        "measurements": [
            "2 oz ",
            "1 cup ",
            "1 tsp "
        ]
    },
    {
        "cockTailId": "12089",
        "name": "Rum Old-fashioned",
        "tags": [],
        "instructions": "Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/otn2011504820649.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "151 proof rum",
            "Powdered sugar",
            "Bitters",
            "Water",
            "Lime peel"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 tsp ",
            "1/2 tsp ",
            "1 dash ",
            "1 tsp ",
            "Twist of "
        ]
    },
    {
        "cockTailId": "12091",
        "name": "Rum Screwdriver",
        "tags": [],
        "instructions": "Pour rum into a highball glass over ice cubes. Add orange juice, stir, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/4c85zq1511782093.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Orange juice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "5 oz "
        ]
    },
    {
        "cockTailId": "12093",
        "name": "Rum Sour",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine the rum, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/bylfi21504886323.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Lemon juice",
            "Sugar",
            "Orange",
            "Maraschino cherry"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1/2 tsp superfine ",
            "1 ",
            "1 "
        ]
    },
    {
        "cockTailId": "12097",
        "name": "Rum Toddy",
        "tags": [],
        "instructions": "Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg",
        "otherImage": null,
        "ingredients": [
            "Rum",
            "Powdered sugar",
            "Lemon peel",
            "Water"
        ],
        "measurements": [
            "2 oz light or dark ",
            "2 tsp ",
            "1 twist of ",
            "2 tsp "
        ]
    },
    {
        "cockTailId": "12101",
        "name": "Rusty Nail",
        "tags": [
            "IBA",
            "Classic"
        ],
        "instructions": "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yqsvtw1478252982.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Drambuie",
            "Lemon peel"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "1 twist of "
        ]
    },
    {
        "cockTailId": "12107",
        "name": "Salty Dog",
        "tags": [],
        "instructions": "Pour all ingredients over ice cubes in a highball glass. Stir well and serve. (Vodka may be substituted for gin, if preferred.)",
        "image": "https://www.thecocktaildb.com/images/media/drink/4vfge01504890216.jpg",
        "otherImage": null,
        "ingredients": [
            "Grapefruit juice",
            "Gin",
            "Salt"
        ],
        "measurements": [
            "5 oz ",
            "1 1/2 oz ",
            "1/4 tsp "
        ]
    },
    {
        "cockTailId": "12130",
        "name": "Scooter",
        "tags": [],
        "instructions": "Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg",
        "otherImage": null,
        "ingredients": [
            "Brandy",
            "Amaretto",
            "Light cream"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "12138",
        "name": "Scotch Cobbler",
        "tags": [],
        "instructions": "Pour scotch, brandy, and curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Brandy",
            "Curacao",
            "Orange",
            "Mint"
        ],
        "measurements": [
            "2 oz ",
            "4 dashes ",
            "4 dashes ",
            "1 slice ",
            "1 "
        ]
    },
    {
        "cockTailId": "12158",
        "name": "Scotch Sour",
        "tags": [],
        "instructions": "Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Lime",
            "Powdered sugar",
            "Lemon",
            "Cherry"
        ],
        "measurements": [
            "1 1/2 oz ",
            "Juice of 1/2 ",
            "1/2 tsp ",
            "1/2 slice ",
            "1 "
        ]
    },
    {
        "cockTailId": "12162",
        "name": "Screwdriver",
        "tags": [
            "IBA"
        ],
        "instructions": "Mix in a highball glass with ice. Garnish and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Orange juice"
        ],
        "measurements": [
            "2 oz "
        ]
    },
    {
        "cockTailId": "12186",
        "name": "Shanghai Cocktail",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ttyrxr1478820678.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Anisette",
            "Grenadine",
            "Lemon"
        ],
        "measurements": [
            "1 oz Jamaican ",
            "1 tsp ",
            "1/2 tsp ",
            "Juice of 1/4 "
        ]
    },
    {
        "cockTailId": "12188",
        "name": "Sherry Eggnog",
        "tags": [],
        "instructions": "Shake sherry, powdered sugar, and egg with ice and strain into a collins glass. Fill with milk and stir. Sprinkle nutmeg on top and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg",
        "otherImage": null,
        "ingredients": [
            "Sherry",
            "Powdered sugar",
            "Egg",
            "Milk",
            "Nutmeg"
        ],
        "measurements": [
            "2 oz cream ",
            "1 tsp ",
            "1 whole "
        ]
    },
    {
        "cockTailId": "12190",
        "name": "Sherry Flip",
        "tags": [],
        "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qrryvq1478820428.jpg",
        "otherImage": null,
        "ingredients": [
            "Sherry",
            "Light cream",
            "Powdered sugar",
            "Egg",
            "Nutmeg"
        ],
        "measurements": [
            "1 1/2 oz cream ",
            "2 tsp ",
            "1 tsp ",
            "1 whole "
        ]
    },
    {
        "cockTailId": "12196",
        "name": "Sidecar",
        "tags": [
            "IBA",
            "Classic"
        ],
        "instructions": "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/x72sik1606854964.jpg",
        "otherImage": "https://www.flickr.com/photos/mstyne/29716525626/in/dateposted/",
        "ingredients": [
            "Cognac",
            "Cointreau",
            "Lemon juice"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "12198",
        "name": "Sidecar Cocktail",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ewjxui1504820428.jpg",
        "otherImage": null,
        "ingredients": [
            "Brandy",
            "Triple sec",
            "Lemon"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz ",
            "Juice of 1/4 "
        ]
    },
    {
        "cockTailId": "12214",
        "name": "Singapore Sling",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into highball glass. Garnish with pineapple and cocktail cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7dozeg1582578095.jpg",
        "otherImage": null,
        "ingredients": [
            "Cherry brandy",
            "Grenadine",
            "Gin",
            "Sweet and sour",
            "Carbonated water",
            "Cherry"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "1 oz ",
            "2 oz "
        ]
    },
    {
        "cockTailId": "12224",
        "name": "Sloe Gin Cocktail",
        "tags": [],
        "instructions": "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/d7mo481504889531.jpg",
        "otherImage": null,
        "ingredients": [
            "Sloe gin",
            "Dry Vermouth",
            "Orange bitters"
        ],
        "measurements": [
            "2 oz ",
            "1/4 tsp ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "12256",
        "name": "Sol Y Sombra",
        "tags": [],
        "instructions": "Shake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is \"Sun and Shade\", and after sampling this drink, you'll understand why. Thanks, Kirby.)",
        "image": "https://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg",
        "otherImage": null,
        "ingredients": [
            "Brandy",
            "Anisette"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 1/2 oz "
        ]
    },
    {
        "cockTailId": "12308",
        "name": "Stone Sour",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vruvtp1472719895.jpg",
        "otherImage": null,
        "ingredients": [
            "Apricot brandy",
            "Orange juice",
            "Sweet and sour"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "12316",
        "name": "Strawberry Daiquiri",
        "tags": [],
        "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg",
        "otherImage": null,
        "ingredients": [
            "Strawberry schnapps",
            "Light rum",
            "Lime juice",
            "Powdered sugar",
            "Strawberries"
        ],
        "measurements": [
            "1/2 oz ",
            "1 oz ",
            "1 oz ",
            "1 tsp ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "12322",
        "name": "Strawberry Margarita",
        "tags": [],
        "instructions": "Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
        "otherImage": null,
        "ingredients": [
            "Strawberry schnapps",
            "Tequila",
            "Triple sec",
            "Lemon juice",
            "Strawberries",
            "Salt"
        ],
        "measurements": [
            "1/2 oz ",
            "1 oz ",
            "1/2 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "12362",
        "name": "Tequila Fizz",
        "tags": [],
        "instructions": "Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg",
        "otherImage": null,
        "ingredients": [
            "Tequila",
            "Lemon juice",
            "Grenadine",
            "Egg white",
            "Ginger ale"
        ],
        "measurements": [
            "2 oz ",
            "1 tblsp ",
            "3/4 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "12370",
        "name": "Tequila Sour",
        "tags": [],
        "instructions": "Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ek0mlq1504820601.jpg",
        "otherImage": null,
        "ingredients": [
            "Tequila",
            "Lemon",
            "Powdered sugar",
            "Lemon",
            "Cherry"
        ],
        "measurements": [
            "2 oz ",
            "Juice of 1/2 ",
            "1 tsp ",
            "1/2 slice ",
            "1 "
        ]
    },
    {
        "cockTailId": "12388",
        "name": "Thriller",
        "tags": [],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rvuswq1461867714.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Wine",
            "Orange juice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz Green Ginger ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "12418",
        "name": "Turf Cocktail",
        "tags": [],
        "instructions": "Stir all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/utypqq1441554367.jpg",
        "otherImage": null,
        "ingredients": [
            "Dry Vermouth",
            "Gin",
            "Anis",
            "Bitters",
            "Orange peel"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1/4 tsp ",
            "2 dashes ",
            "Twist of "
        ]
    },
    {
        "cockTailId": "12420",
        "name": "Tuxedo Cocktail",
        "tags": [
            "IBA",
            "Classic"
        ],
        "instructions": "Stir all ingredients with ice and strain into a cocktail glass. Garnish with a cherry and a twist of lemon zest.",
        "image": "https://www.thecocktaildb.com/images/media/drink/4u0nbl1504352551.jpg",
        "otherImage": null,
        "ingredients": [
            "Dry Vermouth",
            "Gin",
            "Maraschino liqueur",
            "Anis",
            "Orange bitters",
            "Cherry"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 1/2 oz ",
            "1/4 tsp ",
            "1/4 tsp ",
            "2 dashes ",
            "1 "
        ]
    },
    {
        "cockTailId": "12434",
        "name": "Valencia Cocktail",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/9myuc11492975640.jpg",
        "otherImage": null,
        "ingredients": [
            "Apricot brandy",
            "Orange juice",
            "Orange bitters"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 tblsp ",
            "2 dashes "
        ]
    },
    {
        "cockTailId": "12436",
        "name": "Van Vleet",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/fgq2bl1492975771.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Maple syrup",
            "Lemon juice"
        ],
        "measurements": [
            "3 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "12442",
        "name": "Vermouth Cassis",
        "tags": [],
        "instructions": "Stir vermouth and creme de cassis in a highball glass with ice cubes. Fill with carbonated water, stir again, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tswpxx1441554674.jpg",
        "otherImage": null,
        "ingredients": [
            "Dry Vermouth",
            "Creme de Cassis",
            "Carbonated water"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3/4 oz "
        ]
    },
    {
        "cockTailId": "12444",
        "name": "Vesuvio",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/26cq601492976203.jpg",
        "otherImage": null,
        "ingredients": [
            "Light rum",
            "Sweet Vermouth",
            "Lemon",
            "Powdered sugar",
            "Egg white"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz ",
            "Juice of 1/2 ",
            "1 tsp ",
            "1 "
        ]
    },
    {
        "cockTailId": "12446",
        "name": "Veteran",
        "tags": [],
        "instructions": "Pour the rum and cherry brandy into an old-fashioned glass almost filled with ice cubes. Stir well.",
        "image": "https://www.thecocktaildb.com/images/media/drink/iwml9t1492976255.jpg",
        "otherImage": null,
        "ingredients": [
            "Dark rum",
            "Cherry brandy"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "12450",
        "name": "Victor",
        "tags": [],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Sweet Vermouth",
            "Brandy"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "12452",
        "name": "Victory Collins",
        "tags": [],
        "instructions": "Shake all ingredients (except orange slice) with ice and strain into a collins glass over ice cubes. Add the slice of orange and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/lx0lvs1492976619.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Lemon juice",
            "Grape juice",
            "Powdered sugar",
            "Orange"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3 oz ",
            "3 oz unsweetened ",
            "1 tsp ",
            "1 slice "
        ]
    },
    {
        "cockTailId": "12460",
        "name": "Vodka And Tonic",
        "tags": [],
        "instructions": "Pour vodka into a highball glass over ice cubes. Fill with tonic water, stir, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Tonic water"
        ],
        "measurements": [
            "2 oz "
        ]
    },
    {
        "cockTailId": "12528",
        "name": "White Russian",
        "tags": [],
        "instructions": "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Coffee liqueur",
            "Light cream"
        ],
        "measurements": [
            "2 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "12560",
        "name": "Afterglow",
        "tags": [],
        "instructions": "Mix. Serve over ice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        "otherImage": null,
        "ingredients": [
            "Grenadine",
            "Orange juice",
            "Pineapple juice"
        ],
        "measurements": [
            "1 part ",
            "4 parts ",
            "4 parts "
        ]
    },
    {
        "cockTailId": "12630",
        "name": "Rail Splitter",
        "tags": [],
        "instructions": "Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.",
        "image": "https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg",
        "otherImage": null,
        "ingredients": [
            "Sugar syrup",
            "Lemon juice",
            "Ginger ale"
        ],
        "measurements": [
            "2 tsp "
        ]
    },
    {
        "cockTailId": "12654",
        "name": "Banana Milk Shake",
        "tags": [],
        "instructions": "Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
        "otherImage": null,
        "ingredients": [
            "Milk",
            "Orange juice",
            "Sugar syrup",
            "Banana"
        ],
        "measurements": [
            "10 cl cold ",
            "4 cl ",
            "2 tsp ",
            "1/2 "
        ]
    },
    {
        "cockTailId": "12656",
        "name": "Banana Strawberry Shake",
        "tags": [],
        "instructions": "Blend all together in a blender until smooth.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
        "otherImage": null,
        "ingredients": [
            "Strawberries",
            "Banana",
            "Yoghurt",
            "Milk",
            "Honey"
        ],
        "measurements": [
            "1/2 lb frozen ",
            "1 frozen ",
            "1 cup plain ",
            "1 cup ",
            " to taste\n"
        ]
    },
    {
        "cockTailId": "12658",
        "name": "Banana Strawberry Shake Daiquiri",
        "tags": [],
        "instructions": "Blend all together in a blender until smooth.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
        "otherImage": null,
        "ingredients": [
            "Strawberries",
            "Banana",
            "Apple juice"
        ],
        "measurements": [
            "1/2 lb frozen ",
            "1 frozen ",
            "2 cups fresh "
        ]
    },
    {
        "cockTailId": "12668",
        "name": "Egg Cream",
        "tags": [],
        "instructions": "Mix syrup and milk in a fountain glass. Add soda water, serve with a straw.",
        "image": "https://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg",
        "otherImage": null,
        "ingredients": [
            "Chocolate syrup",
            "Milk",
            "Soda water"
        ],
        "measurements": [
            "2 tblsp ",
            "6 oz whole ",
            "6 oz "
        ]
    },
    {
        "cockTailId": "12670",
        "name": "Fruit Cooler",
        "tags": [],
        "instructions": "Toss strawberries with sugar, and let sit overnight in refrigerator. Cut lemon, reserve two slices. Juice the rest. Mix together the lemon juice, strawberries, apple juice, and soda water. Add slices of lemon (decor, really). In glasses, put ice cubes, and a slice of apple. Pour drink in, and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/i3tfn31484430499.jpg",
        "otherImage": null,
        "ingredients": [
            "Apple juice",
            "Strawberries",
            "Sugar",
            "Lemon",
            "Apple",
            "Soda water",
            "Ice"
        ],
        "measurements": [
            "1 can frozen ",
            "1 cup ",
            "2 tblsp ",
            "1 ",
            "1 ",
            "1 L "
        ]
    },
    {
        "cockTailId": "12672",
        "name": "Fruit Flip-Flop",
        "tags": [],
        "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
        "image": "https://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg",
        "otherImage": null,
        "ingredients": [
            "Yoghurt",
            "Fruit juice"
        ],
        "measurements": [
            "1 cup ",
            "1 cup "
        ]
    },
    {
        "cockTailId": "12712",
        "name": "Grape lemon pineapple Smoothie",
        "tags": [],
        "instructions": "Throw everything into a blender and liquify.",
        "image": "https://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg",
        "otherImage": null,
        "ingredients": [
            "Grapes",
            "Lemon",
            "Pineapple"
        ],
        "measurements": [
            "1 cup ",
            "1/4 ",
            "1/2 "
        ]
    },
    {
        "cockTailId": "12714",
        "name": "Kiwi Papaya Smoothie",
        "tags": [],
        "instructions": "Throw everything into a blender and liquify.",
        "image": "https://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg",
        "otherImage": null,
        "ingredients": [
            "Kiwi",
            "Papaya"
        ],
        "measurements": [
            "3 ",
            "1/2 "
        ]
    },
    {
        "cockTailId": "12716",
        "name": "Mango Orange Smoothie",
        "tags": [],
        "instructions": "Throw everything into a blender and liquify.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg",
        "otherImage": null,
        "ingredients": [
            "Mango",
            "Orange"
        ],
        "measurements": [
            "1 ",
            "2 "
        ]
    },
    {
        "cockTailId": "12718",
        "name": "Pineapple Gingerale Smoothie",
        "tags": [],
        "instructions": "Throw everything into a blender and liquify.",
        "image": "https://www.thecocktaildb.com/images/media/drink/eg9i1d1487603469.jpg",
        "otherImage": null,
        "ingredients": [
            "Ginger",
            "Pineapple"
        ],
        "measurements": [
            "1/4 inch ",
            "1/2 "
        ]
    },
    {
        "cockTailId": "12720",
        "name": "Kill the cold Smoothie",
        "tags": [],
        "instructions": "Juice ginger and lemon and add it to hot water. You may add cardomom.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg",
        "otherImage": null,
        "ingredients": [
            "Ginger",
            "Lemon",
            "Water"
        ],
        "measurements": [
            "1 inch ",
            "1/4 ",
            "1 cup hot "
        ]
    },
    {
        "cockTailId": "12722",
        "name": "Strawberry Shivers",
        "tags": [],
        "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
        "image": "https://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg",
        "otherImage": null,
        "ingredients": [
            "Strawberries",
            "Honey",
            "Water"
        ],
        "measurements": [
            "1 1/2 cup ",
            "4 tsp ",
            "1/2 cup "
        ]
    },
    {
        "cockTailId": "12724",
        "name": "Sweet Bananas",
        "tags": [],
        "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg",
        "otherImage": null,
        "ingredients": [
            "Milk",
            "Banana",
            "Honey"
        ],
        "measurements": [
            "2 cups ",
            "1 ",
            "1 tblsp "
        ]
    },
    {
        "cockTailId": "12726",
        "name": "Tomato Tang",
        "tags": [],
        "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
        "image": "https://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg",
        "otherImage": null,
        "ingredients": [
            "Tomato juice",
            "Lemon juice",
            "Celery salt"
        ],
        "measurements": [
            "2 cups ",
            "1-2 tblsp ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "12728",
        "name": "Yoghurt Cooler",
        "tags": [],
        "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Note: Use lots of ice in this one - great on hot days! To add ice: Remove the center of the cover while the blender is on - drop 3 or 4 ice cubs and blend until they're completely crushed.",
        "image": "https://www.thecocktaildb.com/images/media/drink/trttrv1441254466.jpg",
        "otherImage": null,
        "ingredients": [
            "Yoghurt",
            "Fruit",
            "Ice"
        ],
        "measurements": [
            "1 cup ",
            "1 cup "
        ]
    },
    {
        "cockTailId": "12730",
        "name": "Castillian Hot Chocolate",
        "tags": [],
        "instructions": "Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
        "image": "https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg",
        "otherImage": null,
        "ingredients": [
            "Cocoa powder",
            "Sugar",
            "Cornstarch",
            "Water",
            "Milk"
        ],
        "measurements": [
            "1/2 cup ",
            "1 cup ",
            "7 tsp ",
            "1/2 cup ",
            "1 qt "
        ]
    },
    {
        "cockTailId": "12732",
        "name": "Chocolate Beverage",
        "tags": [],
        "instructions": "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
        "image": "https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg",
        "otherImage": null,
        "ingredients": [
            "Milk",
            "Chocolate",
            "Cinnamon",
            "Egg"
        ],
        "measurements": [
            "6 cups ",
            "3 oz Mexican ",
            "1 tsp powdered ",
            "3 "
        ]
    },
    {
        "cockTailId": "12734",
        "name": "Chocolate Drink",
        "tags": [],
        "instructions": "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
        "image": "https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg",
        "otherImage": null,
        "ingredients": [
            "Chocolate",
            "Milk",
            "Water"
        ],
        "measurements": [
            "125 gr",
            "3/4 L "
        ]
    },
    {
        "cockTailId": "12736",
        "name": "Drinking Chocolate",
        "tags": [],
        "instructions": "Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug.",
        "image": "https://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg",
        "otherImage": null,
        "ingredients": [
            "Heavy cream",
            "Milk",
            "Cinnamon",
            "Vanilla",
            "Chocolate",
            "Whipped cream"
        ],
        "measurements": [
            "2 oz ",
            "6-8 oz ",
            "1 stick ",
            "1 ",
            "2 oz finely chopped dark ",
            "Fresh "
        ]
    },
    {
        "cockTailId": "12738",
        "name": "Hot Chocolate to Die for",
        "tags": [],
        "instructions": "Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.",
        "image": "https://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg",
        "otherImage": null,
        "ingredients": [
            "Chocolate",
            "Butter",
            "Vanilla extract",
            "Half-and-half",
            "Marshmallows"
        ],
        "measurements": [
            "12 oz fine ",
            "1 tsp ",
            "1/2 tsp ",
            "1 cup ",
            "mini "
        ]
    },
    {
        "cockTailId": "12744",
        "name": "Microwave Hot Cocoa",
        "tags": [],
        "instructions": "Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1/2 to 2 minutes or until hot. Stir in vanilla, blend well.",
        "image": "https://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg",
        "otherImage": null,
        "ingredients": [
            "Sugar",
            "Cocoa powder",
            "Salt",
            "Water",
            "Milk",
            "Vanilla extract"
        ],
        "measurements": [
            "5 tblsp ",
            "3 tblsp ",
            "1 dash ",
            "3 tblsp hot ",
            "2 cups ",
            "1/4 tsp "
        ]
    },
    {
        "cockTailId": "12746",
        "name": "Nuked Hot Chocolate",
        "tags": [],
        "instructions": "Mix with a bit of milk (1 oz or so) in coffee mug. Nuke mug for about 30-50 seconds. Stir until the heated cocoa dissolves. Fill mug with milk. Nuke for 1-2 minutes, depending on wattage and preferences as to burnt mouth parts.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg",
        "otherImage": null,
        "ingredients": [
            "Cocoa powder",
            "Sugar",
            "Vanilla extract",
            "Milk"
        ],
        "measurements": [
            "2 tsp ",
            "1 tsp ",
            "1/2 tsp ",
            "12 oz "
        ]
    },
    {
        "cockTailId": "12748",
        "name": "Orange Scented Hot Chocolate",
        "tags": [],
        "instructions": "Combine all ingredients in heavy medium saucepan. Stir over low heat until chocolate melts. Increase heat and bring just to a boil, stirring often. Remove from heat and whisk untily frothy. Return to heat and bring to boil again. Remove from heat, whisk until frothy. Repeat heating and whisking once again. Discard orange peel. (Can be prepared 2 hours ahead. Let stand at room temperature. Before serving, bring just to boil, remove from heat and whisk until frothy.) Pour hot chocolate into coffee mugs. Makes 2 servings.",
        "image": "https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg",
        "otherImage": null,
        "ingredients": [
            "Milk",
            "Chocolate",
            "Orange peel",
            "Espresso",
            "Nutmeg"
        ],
        "measurements": [
            "2 cups ",
            "4 oz chopped bittersweet or semi-sweet ",
            "3 2-inch strips ",
            "1/2 tsp instant ",
            "1/8 tsp ground "
        ]
    },
    {
        "cockTailId": "12750",
        "name": "Spanish chocolate",
        "tags": [],
        "instructions": "Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug.",
        "image": "https://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg",
        "otherImage": null,
        "ingredients": [
            "Milk",
            "Chocolate",
            "Cinnamon",
            "Egg yolk"
        ],
        "measurements": [
            "2 cups ",
            "2 oz sweet ",
            "1/2 tsp ",
            "2 beaten "
        ]
    },
    {
        "cockTailId": "12752",
        "name": "Lemon Shot",
        "tags": [],
        "instructions": "Mix Galliano and Absolut Citron in a shot glass, lay lemon wedge sprinkled with sugar over glass and pour a rum over wedge and glass. light rum with a lighter and let burn for a second. Do shot quickly and suck on lemon. If it is done correctly, this will taste like a shot of sweet lemonade.",
        "image": "https://www.thecocktaildb.com/images/media/drink/mx31hv1487602979.jpg",
        "otherImage": null,
        "ingredients": [
            "Galliano",
            "Absolut Citron",
            "Lemon",
            "Sugar",
            "151 proof rum"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            " wedge\n",
            "Bacardi "
        ]
    },
    {
        "cockTailId": "12754",
        "name": "Sex on the Beach",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/lijtw51551455287.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Peach schnapps",
            "Cranberry juice",
            "Grapefruit juice"
        ],
        "measurements": [
            "1 oz ",
            "3/4 oz "
        ]
    },
    {
        "cockTailId": "12756",
        "name": "Autodafé",
        "tags": [],
        "instructions": "Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Lime juice",
            "Soda water"
        ],
        "measurements": [
            "4 cl ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "12758",
        "name": "Gagliardo",
        "tags": [],
        "instructions": "Shake well and serve in a cocktail glass. This is a home cocktail of American/Internet Bar del Pozzo, Pavia, Italy.",
        "image": "https://www.thecocktaildb.com/images/media/drink/lyloe91487602877.jpg",
        "otherImage": null,
        "ingredients": [
            "Peach Vodka",
            "Lemon juice",
            "Galliano",
            "Sirup of roses"
        ],
        "measurements": [
            "5 parts ",
            "3 parts ",
            "1 part ",
            "1 part "
        ]
    },
    {
        "cockTailId": "12760",
        "name": "Surf City Lifesaver",
        "tags": [],
        "instructions": "Lots of ice and soda top up in tall glass with cherry and a grin.",
        "image": "https://www.thecocktaildb.com/images/media/drink/2rzfer1487602699.jpg",
        "otherImage": null,
        "ingredients": [
            "Ouzo",
            "Baileys irish cream",
            "Gin",
            "Grand Marnier"
        ],
        "measurements": [
            "1 part ",
            "1 part ",
            "2 parts ",
            "1/2 part "
        ]
    },
    {
        "cockTailId": "12762",
        "name": "Grizzly Bear",
        "tags": [],
        "instructions": "Served over ice. Sounds nasty, but tastes great.",
        "image": "https://www.thecocktaildb.com/images/media/drink/k6v97f1487602550.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Jägermeister",
            "Kahlua",
            "Milk"
        ],
        "measurements": [
            "1 part ",
            "1 part ",
            "1 part ",
            "2 1/2 parts "
        ]
    },
    {
        "cockTailId": "12764",
        "name": "Karsk",
        "tags": [],
        "instructions": "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
        "image": "https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Grain alcohol"
        ],
        "measurements": [
            "1 part ",
            "2 parts "
        ]
    },
    {
        "cockTailId": "12766",
        "name": "Happy Skipper",
        "tags": [],
        "instructions": "Pour Captain Morgan's Spiced Rum over ice, fill glass to top with Ginger Ale. Garnish with lime. Tastes like a cream soda. Named for the Gilligan's Island reference (\"The Captain\" *in* \"Ginger\" is a Happy Skipper!)",
        "image": "https://www.thecocktaildb.com/images/media/drink/42w2g41487602448.jpg",
        "otherImage": null,
        "ingredients": [
            "Spiced rum",
            "Ginger ale",
            "Lime",
            "Ice"
        ],
        "measurements": [
            "1 1/2 cl "
        ]
    },
    {
        "cockTailId": "12768",
        "name": "Frappé",
        "tags": [],
        "instructions": "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Milk",
            "Sugar"
        ],
        "measurements": [
            "1/2 cup black ",
            "1/2 cup ",
            "1-2 tsp "
        ]
    },
    {
        "cockTailId": "12770",
        "name": "Iced Coffee",
        "tags": [],
        "instructions": "Mix together until coffee and sugar is dissolved. Add milk. Shake well. Using a blender or milk shake maker produces a very foamy drink. Serve in coffee mug.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Sugar",
            "Water",
            "Milk"
        ],
        "measurements": [
            "1/4 cup instant ",
            "1/4 cup ",
            "1/4 cup hot ",
            "4 cups cold "
        ]
    },
    {
        "cockTailId": "12772",
        "name": "Iced Coffee Fillip",
        "tags": [],
        "instructions": "Mix together in a coffee mug and chill before serving.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sxtxrp1454514223.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Coffee"
        ],
        "measurements": [
            "2 tsp ",
            "Strong cold "
        ]
    },
    {
        "cockTailId": "12774",
        "name": "Masala Chai",
        "tags": [],
        "instructions": "Bring 2 cups of water to boil. Add all the ingredients and boil again for about 15 seconds. Let stand for a minute. Warm milk in a pot. Filter tea into cups. Add milk and sugar. That's IT.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg",
        "otherImage": null,
        "ingredients": [
            "Water",
            "Tea",
            "Ginger",
            "Cardamom",
            "Cloves",
            "Cinnamon",
            "Black pepper",
            "Sugar",
            "Milk"
        ],
        "measurements": [
            "2 cups ",
            "3-4 tsp ",
            "1 chunk dried ",
            "3-4 crushed ",
            "3 ",
            "1 piece ",
            "1-2 whole ",
            " to taste\n"
        ]
    },
    {
        "cockTailId": "12776",
        "name": "Melya",
        "tags": [],
        "instructions": "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
        "otherImage": null,
        "ingredients": [
            "Espresso",
            "Honey",
            "Cocoa powder"
        ],
        "measurements": [
            "Unsweetened "
        ]
    },
    {
        "cockTailId": "12780",
        "name": "Spiking coffee",
        "tags": [],
        "instructions": "Incidentally, a pinch of cinnamon is indeed a nice addition to coffee but true heaven is a cardamom seed. Of course, you serve it in a coffee mug.",
        "image": "https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Cinnamon"
        ],
        "measurements": []
    },
    {
        "cockTailId": "12782",
        "name": "Thai Coffee",
        "tags": [],
        "instructions": "Place the coffee and spices in the filter cone of your coffee maker. Brew coffee as usual, let it cool. In a tall glass, dissolve 1 or 2 teaspoons of sugar in an ounce of the coffee (it's easier to dissolve than if you put it right over ice). Add 5-6 ice cubes and pour coffee to within about 1 inch of the top of the glass. Rest a spoon on top of the coffee and slowly pour whipping cream into the spoon. This will make the cream float on top of the coffee rather than dispersing into it right away.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Coriander",
            "Cardamom",
            "Sugar",
            "Whipping cream",
            "Ice"
        ],
        "measurements": [
            "6 tblsp ground",
            "1/4 tsp ",
            "4-5 whole green "
        ]
    },
    {
        "cockTailId": "12784",
        "name": "Thai Iced Coffee",
        "tags": [],
        "instructions": "Prepare a pot of coffee at a good European strength. In the ground coffee, add 2 or 3 freshly ground cardamom pods. Sweeten while hot, then cool quickly. Serve in highball glass over ice, with cream. To get the layered effect, place a spoon atop the coffee and pour the milk carefully into the spoon so that it floats on the top of the coffee.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Sugar",
            "Cream",
            "Cardamom"
        ],
        "measurements": [
            "black",
            " pods\n"
        ]
    },
    {
        "cockTailId": "12786",
        "name": "Thai Iced Tea",
        "tags": [],
        "instructions": "Combine Thai tea (i.e., the powder), boiling water, and sweetened condensed milk, stir until blended. Pour into 2 tall glasses filled with ice cubes. Garnish with mint leaves. Makes 2 servings.",
        "image": "https://www.thecocktaildb.com/images/media/drink/trvwpu1441245568.jpg",
        "otherImage": null,
        "ingredients": [
            "Tea",
            "Water",
            "Condensed milk",
            "Ice",
            "Mint"
        ],
        "measurements": [
            "1/4 cup Thai ",
            "1/2 cup boiling ",
            "2 tsp sweetened ",
            "cubes",
            "garnish"
        ]
    },
    {
        "cockTailId": "12790",
        "name": "Absinthe #2",
        "tags": [],
        "instructions": "Mix together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Sugar",
            "Anise",
            "Licorice root",
            "Wormwood"
        ],
        "measurements": [
            "1 bottle ",
            "50 gr ",
            "50 ml pure ",
            "1 tblsp ",
            "1 "
        ]
    },
    {
        "cockTailId": "12792",
        "name": "Amaretto Liqueur",
        "tags": [],
        "instructions": "Combine sugar and 3/4 cup water in a small saucepan. Bring to a boil, stirring constantly. Reduce heat and simmer until all sugar is dissolved. Remove from heat and cool. In an aging container, combine apricot halves, almond extract, grain alcohol with 1/2 cup water, and brandy. Stir in cooled sugar syrup mixture. Cap and let age for 2 days. Remove apricot halves. (Save apricot halves, can be used for cooking). Add food coloring and glycerine. Stir, recap and continue aging for 1 to 2 months. Re-bottle as desired. Liqueur is ready to serve but will continue to improve with additional aging.",
        "image": "https://www.thecocktaildb.com/images/media/drink/swqxuv1472719649.jpg",
        "otherImage": null,
        "ingredients": [
            "Sugar",
            "Water",
            "Apricot",
            "Almond flavoring",
            "Grain alcohol",
            "Water",
            "Brandy",
            "Food coloring",
            "Food coloring",
            "Food coloring",
            "Glycerine"
        ],
        "measurements": [
            "1 cup",
            "3/4 cup ",
            "2 ",
            "1 tblsp ",
            "1/2 cup pure ",
            "1/2 cup ",
            "1 cup ",
            "3 drops yellow ",
            "6 drops red ",
            "2 drops blue ",
            "1/2 tsp "
        ]
    },
    {
        "cockTailId": "12794",
        "name": "Angelica Liqueur",
        "tags": [],
        "instructions": "Combine all herbs, nuts and spices with vodka in a 1 quart or larger aging container. Cap tightly and shake daily for 2 weeks. Strain through a fine muslin cloth or coffee filter, discarding solids. Clean out aging container. Place liquid back in container. Place sugar and water in saucepan and stir to combine over medium heat. When sugar is completely dissolved, set aside and let cool. When cool combine with food coloring and add to liqueur liquid. Cap and allow to age and mellow in a cool, dark place for one month.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yuurps1472667672.jpg",
        "otherImage": null,
        "ingredients": [
            "Angelica root",
            "Almond",
            "Allspice",
            "Cinnamon",
            "Anise",
            "Coriander",
            "Marjoram leaves",
            "Vodka",
            "Sugar",
            "Water",
            "Food coloring",
            "Food coloring"
        ],
        "measurements": [
            "3 tblsp chopped",
            "1 tblsp chopped ",
            "1 cracked ",
            "1 one-inch ",
            "3-6 crushed ",
            "1/8 tsp powdered ",
            "1 tblsp fresh chopped ",
            "1.5 cup ",
            "1/2 cup granulated ",
            "1/4 cup ",
            "1 drop yellow ",
            "1 drop green "
        ]
    },
    {
        "cockTailId": "12796",
        "name": "Caribbean Orange Liqueur",
        "tags": [],
        "instructions": "Pare very thinly the bright-colored rind from the oranges (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups vodka. Close jar. Store in a cool, dark place for 2 days or until the vodka has absorbed the flavor. Remove peel and add remaining vodka. Close jar and add remaining cup of vodka. Close the jar and store in a cool dark place at least 1 month to age.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg",
        "otherImage": null,
        "ingredients": [
            "Orange",
            "Vodka",
            "Sugar"
        ],
        "measurements": [
            "3 large ",
            "3 cups ",
            "1 1/3 cup superfine "
        ]
    },
    {
        "cockTailId": "12798",
        "name": "Coffee Liqueur",
        "tags": [],
        "instructions": "Combine coffee, sugar and water. Simmer 1 hour and let cool. Add vanilla and vodka. Age in sealed jar 2 to 3 weeks.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ryvtsu1441253851.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Vanilla extract",
            "Sugar",
            "Vodka",
            "Water"
        ],
        "measurements": [
            "10 tblsp instant ",
            "4 tblsp ",
            "2 1/2 cups ",
            "1 qt ",
            "2 1/2 cups "
        ]
    },
    {
        "cockTailId": "12800",
        "name": "Coffee-Vodka",
        "tags": [],
        "instructions": "Boil water and sugar until dissolved. Turn off heat. Slowly add dry instant coffee and continue stirring. Add a chopped vanilla bean to the vodka, then combine the cooled sugar syrup and coffee solution with the vodka. Cover tightly and shake vigorously each day for 3 weeks. Strain and filter. Its also best to let the sugar mixture cool completely so the vodka won't evaporate when its added. If you like a smoother feel to the liqueur you can add about 1 teaspoon of glycerine to the finished product.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qvrrvu1472667494.jpg",
        "otherImage": null,
        "ingredients": [
            "Water",
            "Sugar",
            "Coffee",
            "Vanilla",
            "Vodka",
            "Caramel coloring"
        ],
        "measurements": [
            "2 cups ",
            "2 cups white ",
            "1/2 cup instant ",
            "1/2",
            "1 1/2 cup"
        ]
    },
    {
        "cockTailId": "12802",
        "name": "Cranberry Cordial",
        "tags": [],
        "instructions": "Place the chopped cranberries in a 2 liter jar that has a tight-fitting lid. Add the sugar and rum. Adjust the lid securely and place the jar in a cool, dark place. Invert the jar and shake it every day for six weeks. Strain the cordial into bottles and seal with corks.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qtspsx1472667392.jpg",
        "otherImage": null,
        "ingredients": [
            "Cranberries",
            "Sugar",
            "Light rum"
        ],
        "measurements": [
            "1/2 kg chopped ",
            "3/4 L ",
            "1/2 L "
        ]
    },
    {
        "cockTailId": "12808",
        "name": "Creme de Menthe",
        "tags": [],
        "instructions": "Bring sugar and water to a boil and simmer for 10 minutes. Cool. Add the remaining ingredients and stir. Cover and let ripen for 1 month.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yxswtp1441253918.jpg",
        "otherImage": null,
        "ingredients": [
            "Sugar",
            "Water",
            "Grain alcohol",
            "Peppermint extract",
            "Food coloring"
        ],
        "measurements": [
            "8 cups ",
            "6 cups ",
            "1 pint ",
            "1 oz pure ",
            "1 tblsp green "
        ]
    },
    {
        "cockTailId": "12820",
        "name": "Irish Cream",
        "tags": [],
        "instructions": "Mix scotch and milk. Add half-and-half. Add rest.",
        "image": "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
        "otherImage": null,
        "ingredients": [
            "Scotch",
            "Half-and-half",
            "Condensed milk",
            "Coconut syrup",
            "Chocolate syrup"
        ],
        "measurements": [
            "1 cup ",
            "1 1/4 cup ",
            "1 can sweetened ",
            "3 drops ",
            "1 tblsp "
        ]
    },
    {
        "cockTailId": "12856",
        "name": "Tia-Maria",
        "tags": [],
        "instructions": "Boil water, sugar and coffe for 10 mins and let cool. Add rum and vanilla. Put in clean bottle(s) and leave for 1 week before using.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sih81u1504367097.jpg",
        "otherImage": null,
        "ingredients": [
            "Water",
            "Brown sugar",
            "Coffee",
            "Rum",
            "Vanilla extract"
        ],
        "measurements": [
            "1 cup ",
            "3/4-1 cup ",
            "4 tsp ",
            "1 cup ",
            "4 tsp "
        ]
    },
    {
        "cockTailId": "12862",
        "name": "Aloha Fruit punch",
        "tags": [],
        "instructions": "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
        "otherImage": null,
        "ingredients": [
            "Water",
            "Ginger",
            "Guava juice",
            "Lemon juice",
            "Pineapple",
            "Sugar",
            "Pineapple juice"
        ],
        "measurements": [
            "3/4 cup ",
            "2 tsp ",
            "2 cups ",
            "1 1/2 tblsp ",
            "1 1/2 cup ",
            "1 cup ",
            "3-4 cups "
        ]
    },
    {
        "cockTailId": "12864",
        "name": "Apple Cider Punch",
        "tags": [],
        "instructions": "If you use the whole all spice and cloves, tie them in cheesecloth. Heat the mixture. Stir occasionally. If you want an alcoholic drink, rum would be nice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xrqxuv1454513218.jpg",
        "otherImage": null,
        "ingredients": [
            "Apple cider",
            "Brown sugar",
            "Lemonade",
            "Orange juice",
            "Cloves",
            "Allspice",
            "Nutmeg",
            "Cinnamon"
        ],
        "measurements": [
            "4 qt ",
            "1 cup ",
            "6 oz frozen ",
            "6 oz frozen ",
            "6 whole ",
            "6 whole ",
            "1 tsp ground ",
            "3 sticks "
        ]
    },
    {
        "cockTailId": "12870",
        "name": "Artillery Punch",
        "tags": [],
        "instructions": "Combine all the ingredients in a large punch bowl with a block of ice. If found too dry, sugar syrup may be added. Decorate with twists of lemon peel.",
        "image": "https://www.thecocktaildb.com/images/media/drink/9a4vqb1493067692.jpg",
        "otherImage": null,
        "ingredients": [
            "Tea",
            "Rye whiskey",
            "Red wine",
            "Rum",
            "Brandy",
            "Benedictine",
            "Orange juice",
            "Lemon juice"
        ],
        "measurements": [
            "1 quart black ",
            "1 quart ",
            "1 fifth ",
            "1 pint Jamaican ",
            "1/2 pint ",
            "1 1/2 oz ",
            "1 pint ",
            "1/2 pint "
        ]
    },
    {
        "cockTailId": "12876",
        "name": "Berry Deadly",
        "tags": [],
        "instructions": "Add all ingredients to large bowl. Stir gently. Serve chilled.",
        "image": "https://www.thecocktaildb.com/images/media/drink/zk74k21593351065.jpg",
        "otherImage": null,
        "ingredients": [
            "Everclear",
            "Wine",
            "Orange juice",
            "Kool-Aid"
        ],
        "measurements": [
            "2 pint ",
            "1 bottle Boone Strawberry Hill ",
            "1/2 gal ",
            "1 gal Tropical Berry "
        ]
    },
    {
        "cockTailId": "12890",
        "name": "Cranberry Punch",
        "tags": [],
        "instructions": "Combine first four ingredients. Stir until sugar is dissolved, chill. Then add ginger ale just before serving. Add ice ring to keep punch cold.",
        "image": "https://www.thecocktaildb.com/images/media/drink/mzgaqu1504389248.jpg",
        "otherImage": null,
        "ingredients": [
            "Cranberry juice",
            "Sugar",
            "Pineapple juice",
            "Almond flavoring",
            "Ginger ale"
        ],
        "measurements": [
            "4 cups ",
            "1 1/2 cup ",
            "4 cups ",
            "1 tblsp ",
            "2 qt "
        ]
    },
    {
        "cockTailId": "12910",
        "name": "Egg Nog #4",
        "tags": [],
        "instructions": "In a small mixer bowl beat egg yolks till blended. Gradually add 1/4 cup sugar, beating at high speed till thick and lemon colored. Stir in milk, stir in rum, bourbon, vanilla, and salt. Chill thoroughly. Whip cream. Wash beaters well. In a large mixer bowl beat egg whites till soft peaks form. Gradually add remaining 1/4 cup sugar, beating to stiff peaks. Fold yolk mixture and whipped cream into egg whites. Serve immediately. Sprinkle nutmeg over each serving. Serve in a punch bowl or another big bowl. NOTE: For a nonalcoholic eggnog, prepare Eggnog as above, except omit the bourbon and rum and increase the milk to 3 cups.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wpspsy1468875747.jpg",
        "otherImage": null,
        "ingredients": [
            "Egg yolk",
            "Sugar",
            "Milk",
            "Light rum",
            "Bourbon",
            "Vanilla extract",
            "Salt",
            "Whipping cream",
            "Egg white",
            "Sugar",
            "Nutmeg"
        ],
        "measurements": [
            "6 ",
            "1/4 cup ",
            "2 cups ",
            "1/2 cup ",
            "1/2 cup ",
            "1 tsp ",
            "1/4 tsp ",
            "1 cup ",
            "6 ",
            "1/4 cup ",
            "Ground "
        ]
    },
    {
        "cockTailId": "12914",
        "name": "Egg-Nog - Classic Cooked",
        "tags": [],
        "instructions": "In large saucepan, beat together eggs, sugar and salt, if desired. Stir in 2 cups of the milk. Cook over low heat, stirring constantly, until mixture is thick enough to coat a metal spoon and reaches 160 degrees F. Remove from heat. Stir in remaining 2 cups milk and vanilla. Cover and regfigerate until thoroughly chilled, several hours or overnight. Just before serving, pour into bowl or pitcher. Garnish or add stir-ins, if desired. Choose 1 or several of: Chocolate curls, cinnamon sticks, extracts of flavorings, flavored brandy or liqueur, fruit juice or nectar, ground nutmeg, maraschino cherries, orange slices, peppermint sticks or candy canes, plain brandy, run or whiskey, sherbet or ice-cream, whipping cream, whipped. Serve immediately.",
        "image": "https://www.thecocktaildb.com/images/media/drink/quxsvt1468875505.jpg",
        "otherImage": null,
        "ingredients": [
            "Egg",
            "Sugar",
            "Salt",
            "Milk",
            "Vanilla extract"
        ],
        "measurements": [
            "6 ",
            "1/4 cup ",
            "1/4 tsp ",
            "1 qt ",
            "1 tsp "
        ]
    },
    {
        "cockTailId": "12916",
        "name": "Egg Nog - Healthy",
        "tags": [],
        "instructions": "Whip egg substitute and sugar together, combine with the two kinds of milk, vanilla, and rum. Mix well. Chill over night. Sprinkle with nutmeg. Makes 6 servings.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qxuppv1468875308.jpg",
        "otherImage": null,
        "ingredients": [
            "Egg",
            "Sugar",
            "Condensed milk",
            "Milk",
            "Vanilla extract",
            "Rum",
            "Nutmeg"
        ],
        "measurements": [
            "1/2 cup ",
            "3 tblsp ",
            "13 oz skimmed ",
            "3/4 cup skimmed ",
            "1 tsp ",
            "1 tsp ",
            "\n",
            "\n",
            "\n",
            "\n",
            "\n",
            "\n"
        ]
    },
    {
        "cockTailId": "12944",
        "name": "Gluehwein",
        "tags": [],
        "instructions": "Boil sugar and spices in water, leave in the water for 30 minutes. Strain the spiced water and mix with the wine. Heat slowly until short of boiling temperature. (To remove alcohol, let it boil for a while.) You may add lemon or orange juice to taste. Serve in irish coffee cup.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vuxwvt1468875418.jpg",
        "otherImage": null,
        "ingredients": [
            "Red wine",
            "Water",
            "Sugar",
            "Cinnamon",
            "Cloves",
            "Lemon peel"
        ],
        "measurements": [
            "1 L ",
            "125 ml ",
            "60 gr ",
            "1 ",
            "3 ",
            "1 tblsp "
        ]
    },
    {
        "cockTailId": "12988",
        "name": "Mulled Wine",
        "tags": [
            "Christmas"
        ],
        "instructions": "Simmer 3 cups water with, sugar, cloves, cinnamon sticks, and lemon peel in a stainless steel pot for 10 minutes. Add wine heat to a \"coffee temperature\" (DO NOT BOIL) then add the brandy.",
        "image": "https://www.thecocktaildb.com/images/media/drink/iuwi6h1504735724.jpg",
        "otherImage": null,
        "ingredients": [
            "Water",
            "Sugar",
            "Cloves",
            "Cinnamon",
            "Lemon peel",
            "Red wine",
            "Brandy"
        ],
        "measurements": [
            "3 cups ",
            "1 cup ",
            "12 ",
            "2 ",
            "1 ",
            "750 ml ",
            "1/4 cup "
        ]
    },
    {
        "cockTailId": "13024",
        "name": "Sweet Sangria",
        "tags": [],
        "instructions": "Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uqqvsp1468924228.jpg",
        "otherImage": null,
        "ingredients": [
            "Red wine",
            "Sugar",
            "Water",
            "Apple",
            "Orange",
            "Lime",
            "Lemon",
            "Fresca"
        ],
        "measurements": [
            "2 bottles ",
            "1 cup ",
            "2 cups hot ",
            "1 cup",
            " wedges\n",
            " wedges\n"
        ]
    },
    {
        "cockTailId": "13026",
        "name": "Sangria The  Best",
        "tags": [],
        "instructions": "Mix wine, sugar and fruit, and let sit in the fridge for 18-24 hours. The mixture will have a somewhat syrupy consistency. Before serving stir in brandy and cut the mixture with soda water until it have a thinner, more wine like consistency. Serve from a pitcher in wine glasses.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vysywu1468924264.jpg",
        "otherImage": null,
        "ingredients": [
            "Red wine",
            "Sugar",
            "Lemon",
            "Orange",
            "Apple",
            "Brandy",
            "Soda water"
        ],
        "measurements": [
            "1 1/2 L ",
            "1 cup ",
            "1 large ",
            "1 large ",
            "1 large ",
            "3-4 oz plain "
        ]
    },
    {
        "cockTailId": "13032",
        "name": "Spiced Peach Punch",
        "tags": [],
        "instructions": "Combine peach nectar, orange juice and brown sugar in a large saucepan. Tie cinnamon and cloves in a small cheesecloth bag. Drop into saucepan. Heat slowly, stirring constantly, until sugar dissolves. Simmer 10 minutes. Stir in lime juice. Serve in hot mugs.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg",
        "otherImage": null,
        "ingredients": [
            "Peach nectar",
            "Orange juice",
            "Brown sugar",
            "Cinnamon",
            "Cloves",
            "Lime juice"
        ],
        "measurements": [
            "46 oz ",
            "20 oz ",
            "1/2 cup ",
            "3 3-inch ",
            "1/2 tsp ",
            "2 tblsp "
        ]
    },
    {
        "cockTailId": "13036",
        "name": "Strawberry Lemonade",
        "tags": [],
        "instructions": "Throw everything into a blender and mix until fairly smooth. Serve over ice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/spvvxp1468924425.jpg",
        "otherImage": null,
        "ingredients": [
            "Lemon",
            "Sugar",
            "Strawberries",
            "Water"
        ],
        "measurements": [
            "Juice of 1 ",
            "1 tblsp ",
            "8-10 ripe ",
            "1 cup "
        ]
    },
    {
        "cockTailId": "13058",
        "name": "Wine Punch",
        "tags": [],
        "instructions": "Combine all of the ingredients and pour over a block of ice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/txustu1473344310.jpg",
        "otherImage": null,
        "ingredients": [
            "Red wine",
            "Lemon",
            "Orange juice",
            "Orange",
            "Pineapple juice"
        ],
        "measurements": [
            "1 bottle ",
            "2 ",
            "1 cup ",
            "3 ",
            "1 cup "
        ]
    },
    {
        "cockTailId": "13066",
        "name": "Bruce's Puce",
        "tags": [],
        "instructions": "In a regular-sized shot glass, layer, with a spoon or cherry, the grenadine , the Kahlua , then the Bailey's Irish cream in equal portions. It goes down really smooth ,and you don't even need a chaser. It tastes just like chocolate milk.(Really!)",
        "image": "https://www.thecocktaildb.com/images/media/drink/svsvqv1473344558.jpg",
        "otherImage": null,
        "ingredients": [
            "Grenadine",
            "Kahlua",
            "Baileys irish cream"
        ],
        "measurements": []
    },
    {
        "cockTailId": "13068",
        "name": "Brave Bull Shooter",
        "tags": [],
        "instructions": "Pour Tabasco into bottom of shot glass and fill with tequila.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yrtypx1473344625.jpg",
        "otherImage": null,
        "ingredients": [
            "Tequila",
            "Tabasco sauce"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "13070",
        "name": "Fahrenheit 5000",
        "tags": [],
        "instructions": "Cover bottom of shot glass with Tabasco Sauce and then fill with half Firewater and half Absolut Peppar.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tysssx1473344692.jpg",
        "otherImage": null,
        "ingredients": [
            "Firewater",
            "Absolut Peppar",
            "Tabasco sauce"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "13072",
        "name": "Popped cherry",
        "tags": [],
        "instructions": "Served over ice in a tall glass with a popped cherry (can add more popped cherries if in the mood)!",
        "image": "https://www.thecocktaildb.com/images/media/drink/sxvrwv1473344825.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Cherry liqueur",
            "Cranberry juice",
            "Orange juice"
        ],
        "measurements": [
            "2 oz ",
            "2 oz ",
            "4 oz ",
            "4 oz "
        ]
    },
    {
        "cockTailId": "13086",
        "name": "Atomic Lokade",
        "tags": [],
        "instructions": "In a shaker, place lemonade, vodka, blue Curacao, and triple sec together. Shake with ice and strain into glass. Add sugar to taste",
        "image": "https://www.thecocktaildb.com/images/media/drink/n3zfrh1493067412.jpg",
        "otherImage": null,
        "ingredients": [
            "Lemonade",
            "Vodka",
            "Blue Curacao",
            "Triple sec",
            "Sugar",
            "Ice"
        ],
        "measurements": [
            "5 oz ",
            "1 oz ",
            "1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "13128",
        "name": "Diesel",
        "tags": [],
        "instructions": "Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sxrrqq1454512852.jpg",
        "otherImage": null,
        "ingredients": [
            "Lager",
            "Cider",
            "Blackcurrant cordial"
        ],
        "measurements": [
            "1/2 pint ",
            "1/2 pint ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "13162",
        "name": "Afternoon",
        "tags": [],
        "instructions": "Build into a suiting glass, with no ice. Cream on top if wanted. Served directly.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Baileys irish cream",
            "Frangelico",
            "Coffee",
            "Cream"
        ],
        "measurements": [
            "1 cl ",
            "1 cl ",
            "1 1/2 ",
            "4 cl hot "
        ]
    },
    {
        "cockTailId": "13194",
        "name": "Damned if you do",
        "tags": [],
        "instructions": "Pour into shot glass. Put in mouth. Repeat as deemed necessary.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg",
        "otherImage": null,
        "ingredients": [
            "Whiskey",
            "Hot Damn"
        ],
        "measurements": [
            "0.75 oz ",
            "0.25 oz "
        ]
    },
    {
        "cockTailId": "13196",
        "name": "Long vodka",
        "tags": [],
        "instructions": "Shake a tall glass with ice cubes and Angostura, coating the inside of the glass. Por the vodka onto this, add 1 slice of lime and squeeze juice out of remainder, mix with tonic, stir and voila you have a Long Vodka",
        "image": "https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Lime",
            "Angostura bitters",
            "Tonic water",
            "Ice"
        ],
        "measurements": [
            "5 cl ",
            "1/2 ",
            "4 dashes ",
            "1 dl Schweppes ",
            "4 "
        ]
    },
    {
        "cockTailId": "13198",
        "name": "Quick F**K",
        "tags": [],
        "instructions": "In a shot glass add 1/3 Kahlua first. Then 1/3 Miduri, topping it off with a 1/3 bailey's irish cream",
        "image": "https://www.thecocktaildb.com/images/media/drink/wvtwpp1478963454.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Midori melon liqueur",
            "Baileys irish cream"
        ],
        "measurements": [
            "1 part ",
            "1 part ",
            "1 part "
        ]
    },
    {
        "cockTailId": "13200",
        "name": "Owen's Grandmother's Revenge",
        "tags": [],
        "instructions": "Add ingredients and mix in blender.",
        "image": "https://www.thecocktaildb.com/images/media/drink/0wt4uo1503565321.jpg",
        "otherImage": null,
        "ingredients": [
            "Whiskey",
            "Beer",
            "Lemonade",
            "Ice"
        ],
        "measurements": [
            "12 oz ",
            "12 oz ",
            "12 oz frozen ",
            "1 cup crushed "
        ]
    },
    {
        "cockTailId": "13202",
        "name": "Flaming Dr. Pepper",
        "tags": [],
        "instructions": "Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer",
        "image": "https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Vodka",
            "151 proof rum",
            "Dr. Pepper",
            "Beer"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz Bacardi ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "13204",
        "name": "New York Lemonade",
        "tags": [],
        "instructions": "Serve in a chilled cocktail glass. Lemon and sugar the rim. Stir and Strain.",
        "image": "https://www.thecocktaildb.com/images/media/drink/b3n0ge1503565473.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Citron",
            "Grand Marnier",
            "Lemon juice",
            "Club soda"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "2 oz sweetened ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "13206",
        "name": "Caipirissima",
        "tags": [],
        "instructions": "Same as Caipirinha but instead of cachaca you add WHITE RUM. It's great!!!!!!!!",
        "image": "https://www.thecocktaildb.com/images/media/drink/yd47111503565515.jpg",
        "otherImage": null,
        "ingredients": [
            "Lime",
            "Sugar",
            "White rum",
            "Ice"
        ],
        "measurements": [
            "2 ",
            "2 tblsp ",
            "2-3 oz ",
            "crushed "
        ]
    },
    {
        "cockTailId": "13214",
        "name": "Pisco Sour",
        "tags": [
            "IBA",
            "NewEra"
        ],
        "instructions": "Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.\r\n",
        "image": "https://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg",
        "otherImage": null,
        "ingredients": [
            "Pisco",
            "Lemon juice",
            "Sugar",
            "Ice",
            "Egg White"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1-2 tblsp ",
            "1"
        ]
    },
    {
        "cockTailId": "13222",
        "name": "Big Red",
        "tags": [],
        "instructions": "Pour ingredients into 1 ounce shot glass",
        "image": "https://www.thecocktaildb.com/images/media/drink/yqwuwu1441248116.jpg",
        "otherImage": null,
        "ingredients": [
            "Irish cream",
            "Goldschlager"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "13282",
        "name": "Black & Tan",
        "tags": [],
        "instructions": "Fill pint glass half full with Bass. Next pour Guiness over a spoon slowly until glass is full. If done correctly the Guiness will stay on top and the Bass on bottom hence the name Black & Tan.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg",
        "otherImage": null,
        "ingredients": [
            "Ale",
            "Guinness stout"
        ],
        "measurements": [
            "1 part Bass pale ",
            "1 part "
        ]
    },
    {
        "cockTailId": "13328",
        "name": "Chocolate Milk",
        "tags": [],
        "instructions": "Put the milk in the bottom, pour the Liquer on top and add the dash of amaretto. Do not mix. SLAM IT!",
        "image": "https://www.thecocktaildb.com/images/media/drink/j6q35t1504889399.jpg",
        "otherImage": null,
        "ingredients": [
            "Chocolate liqueur",
            "Milk",
            "Amaretto"
        ],
        "measurements": [
            "1/2 shot ",
            "1/2 shot ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "13332",
        "name": "B-53",
        "tags": [],
        "instructions": "Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
        "image": "https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Sambuca",
            "Grand Marnier"
        ],
        "measurements": [
            "1/3 shot ",
            "1/3 shot ",
            "1/3 shot "
        ]
    },
    {
        "cockTailId": "13377",
        "name": "Sea breeze",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7rfuks1504371562.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Cranberry juice",
            "Grapefruit juice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "4 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "13395",
        "name": "Bob Marley",
        "tags": [],
        "instructions": "Layer in a 2 oz shot glass or pony glass",
        "image": "https://www.thecocktaildb.com/images/media/drink/rrqrst1477140664.jpg",
        "otherImage": null,
        "ingredients": [
            "Midori melon liqueur",
            "Jägermeister",
            "Goldschlager"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "13405",
        "name": "Brainteaser",
        "tags": [],
        "instructions": "layered erin first, then sambuca and then avocart(should sit in middle of other two. To drink: use a straw to suck up avocart then shot the rest and then suck fumes up through straw.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ruywtq1461866066.jpg",
        "otherImage": null,
        "ingredients": [
            "Sambuca",
            "Erin Cream",
            "Advocaat"
        ],
        "measurements": [
            "30 ml white ",
            "30 ml ",
            "5 ml "
        ]
    },
    {
        "cockTailId": "13423",
        "name": "Atlantic Sun",
        "tags": [],
        "instructions": "Shake all the ingredients, top the drink with soda. Garnish with a slice of orange.",
        "image": "https://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Southern Comfort",
            "Passion fruit syrup",
            "Sweet and sour",
            "Club soda"
        ],
        "measurements": [
            "2 cl Smirnoff ",
            "2 cl ",
            "2 cl ",
            "6 cl ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "13497",
        "name": "Green Goblin",
        "tags": [],
        "instructions": "Cider First, Lager then Curacao",
        "image": "https://www.thecocktaildb.com/images/media/drink/qxprxr1454511520.jpg",
        "otherImage": null,
        "ingredients": [
            "Cider",
            "Lager",
            "Blue Curacao"
        ],
        "measurements": [
            "1/2 pint hard ",
            "1/2 pint ",
            "1 shot "
        ]
    },
    {
        "cockTailId": "13499",
        "name": "Oreo Mudslide",
        "tags": [],
        "instructions": "Blend Vodka, Kahlua, Bailey's, ice-cream and the Oreo well in a blender. Pour into a large frosted glass. Garnish with whipped cream and a cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tpwwut1468925017.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Kahlua",
            "Baileys irish cream",
            "Vanilla ice-cream",
            "Oreo cookie"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz ",
            "2 scoops ",
            "1 "
        ]
    },
    {
        "cockTailId": "13535",
        "name": "Pink Panty Pulldowns",
        "tags": [],
        "instructions": "Shake well",
        "image": "https://www.thecocktaildb.com/images/media/drink/squsuy1468926657.jpg",
        "otherImage": null,
        "ingredients": [
            "Sprite",
            "Pink lemonade",
            "Vodka"
        ],
        "measurements": [
            "1 L ",
            "2 cups ",
            "2 cups "
        ]
    },
    {
        "cockTailId": "13581",
        "name": "410 Gone",
        "tags": [],
        "instructions": "",
        "image": "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
        "otherImage": null,
        "ingredients": [
            "Peach Vodka",
            "Coca-Cola"
        ],
        "measurements": [
            "2-3 oz"
        ]
    },
    {
        "cockTailId": "13621",
        "name": "Tequila Sunrise",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
        "otherImage": null,
        "ingredients": [
            "Tequila",
            "Orange juice",
            "Grenadine"
        ],
        "measurements": [
            "2 measures "
        ]
    },
    {
        "cockTailId": "13625",
        "name": "Screaming Orgasm",
        "tags": [],
        "instructions": "Pour first vodka, then Bailey's, then Kahlua into a cocktail glass over crushed ice. Stir. Caution: use only high quality vodka. Cheap vodka can cause the Bailey's to curdle. Test your brand of vodka by mixing 1 Tsp each of vodka and Bailey's first.",
        "image": "https://www.thecocktaildb.com/images/media/drink/x894cs1504388670.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Baileys irish cream",
            "Kahlua"
        ],
        "measurements": [
            "1 oz ",
            "1 1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "13675",
        "name": "Flander's Flake-Out",
        "tags": [],
        "instructions": "Bang 'em both in.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sqvqrx1461866705.jpg",
        "otherImage": null,
        "ingredients": [
            "Sambuca",
            "Sarsaparilla"
        ],
        "measurements": [
            "1/4 glass ",
            "3/4 glass "
        ]
    },
    {
        "cockTailId": "13683",
        "name": "Apple Slammer",
        "tags": [],
        "instructions": "pour into a shot glass and present to consumer, they are expected to cover the top of the shotglass with thier palm, raise the glass, slam it on the bar and the swallow quickly.",
        "image": "https://www.thecocktaildb.com/images/media/drink/09yd5f1493069852.jpg",
        "otherImage": null,
        "ingredients": [
            "7-Up",
            "Apple schnapps"
        ],
        "measurements": [
            "1 part ",
            "1 part "
        ]
    },
    {
        "cockTailId": "13731",
        "name": "Amaretto Sour",
        "tags": [],
        "instructions": "Shake and strain. Garnish with a cherry and an orange slice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Sour mix"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3 oz "
        ]
    },
    {
        "cockTailId": "13751",
        "name": "Cuba Libra",
        "tags": [],
        "instructions": "Fill tall glass with ice cubes. Add rum. Rub cut edge of lime on rim of glass then squeeze juice into glass. Fill with Coca-Cola. Garnish with lime slice. Enjoy!",
        "image": "https://www.thecocktaildb.com/images/media/drink/ck6d0p1504388696.jpg",
        "otherImage": null,
        "ingredients": [
            "Dark rum",
            "Lime",
            "Coca-Cola",
            "Ice"
        ],
        "measurements": [
            "1-2 shot ",
            "Squeeze ",
            "Fill with "
        ]
    },
    {
        "cockTailId": "13775",
        "name": "Jelly Bean",
        "tags": [],
        "instructions": "mix equal parts in pony glass-tastes just like a jelly bean!",
        "image": "https://www.thecocktaildb.com/images/media/drink/bglc6y1504388797.jpg",
        "otherImage": null,
        "ingredients": [
            "Blackberry brandy",
            "Anis"
        ],
        "measurements": [
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "13807",
        "name": "After Five",
        "tags": [],
        "instructions": "1. Pour Kahlua into shot glass to about 1/2 full. 2. Using a spoon(inverted), slowly pour in the Peppermint Schnapps until glass is about 3/4 full. Done correctly, the Schnapps will flow under the Kahlua for a clear layer. 3. Again using a spoon, but this time right side up, slowly top off the glass with a layer of Bailey's. Be careful to place the spoon right at the top of the Kahlua layer and to raise it as the glass fills up. Done correctly, this will provide a layer of Bailey's floating over the Kahlua. 4. Toss it down all at once for something like a Peppermint Pattie, WITH A BANG!!! NOTE: Best if all ingredients are chilled",
        "image": "https://www.thecocktaildb.com/images/media/drink/sk3lr91493068595.jpg",
        "otherImage": null,
        "ingredients": [
            "Peppermint schnapps",
            "Kahlua",
            "Baileys irish cream"
        ],
        "measurements": []
    },
    {
        "cockTailId": "13825",
        "name": "Midnight Manx",
        "tags": [],
        "instructions": "Fill a mixer with ice and add Baileys, Kahlua, Goldshlager, and cream. Shake for 5 seconds and Strain into a double rocks glass filled with ice. Add chilled coffee Stir and enjoy!",
        "image": "https://www.thecocktaildb.com/images/media/drink/uqqurp1441208231.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Baileys irish cream",
            "Goldschlager",
            "Heavy cream",
            "Coffee"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "dash ",
            "2 oz ",
            "2 oz Hazlenut "
        ]
    },
    {
        "cockTailId": "13837",
        "name": "Kir Royale",
        "tags": [],
        "instructions": "Pour Creme de cassis in glass, gently pour champagne on top",
        "image": "https://www.thecocktaildb.com/images/media/drink/yt9i7n1504370388.jpg",
        "otherImage": null,
        "ingredients": [
            "Creme de Cassis",
            "Champagne"
        ],
        "measurements": [
            "1 part ",
            "5 parts "
        ]
    },
    {
        "cockTailId": "13847",
        "name": "Jackhammer",
        "tags": [],
        "instructions": "Serve over ice- Warning,Deadly!",
        "image": "https://www.thecocktaildb.com/images/media/drink/9von5j1504388896.jpg",
        "otherImage": null,
        "ingredients": [
            "Jack Daniels",
            "Amaretto"
        ],
        "measurements": [
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "13861",
        "name": "Nutty Irishman",
        "tags": [],
        "instructions": "Serve over ice",
        "image": "https://www.thecocktaildb.com/images/media/drink/xspupx1441248014.jpg",
        "otherImage": null,
        "ingredients": [
            "Baileys irish cream",
            "Frangelico",
            "Milk"
        ],
        "measurements": [
            "1 part ",
            "1 part ",
            "1 part "
        ]
    },
    {
        "cockTailId": "13899",
        "name": "3 Wise Men",
        "tags": [],
        "instructions": "put them them in a glass... and slam it to tha head.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
        "otherImage": null,
        "ingredients": [
            "Jack Daniels",
            "Johnnie Walker",
            "Jim Beam"
        ],
        "measurements": [
            "1/3 oz ",
            "1/3 oz ",
            "1/3 oz "
        ]
    },
    {
        "cockTailId": "13936",
        "name": "Miami Vice",
        "tags": [
            "IBA"
        ],
        "instructions": "First: Mix pina colada with 2.5 oz. of rum with ice(set aside). Second: Mix daiquiri with 2.5 oz. of rum with ice. Third: While frozen, add pina colda mix then daiquiri mix in glass (Making sure they do not get mixed together).",
        "image": "https://www.thecocktaildb.com/images/media/drink/qvuyqw1441208955.jpg",
        "otherImage": null,
        "ingredients": [
            "151 proof rum",
            "Pina colada mix",
            "Daiquiri mix"
        ],
        "measurements": [
            "5 oz Bacardi ",
            "frozen ",
            "frozen "
        ]
    },
    {
        "cockTailId": "13938",
        "name": "AT&T",
        "tags": [],
        "instructions": "Pour Vodka and Gin over ice, add Tonic and Stir",
        "image": "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Vodka",
            "Gin",
            "Tonic water"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "4 oz "
        ]
    },
    {
        "cockTailId": "13940",
        "name": "69 Special",
        "tags": [],
        "instructions": "Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "7-Up",
            "Lemon juice"
        ],
        "measurements": [
            "2 oz dry ",
            "4 oz ",
            "0.75 oz "
        ]
    },
    {
        "cockTailId": "13971",
        "name": "Irish Coffee",
        "tags": [
            "IBA",
            "ContemporaryClassic"
        ],
        "instructions": "Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sywsqw1439906999.jpg",
        "otherImage": null,
        "ingredients": [
            "Irish whiskey",
            "Coffee",
            "Sugar",
            "Whipped cream"
        ],
        "measurements": [
            "1 1/2 oz ",
            "8 oz ",
            "1 tsp ",
            "1 tblsp "
        ]
    },
    {
        "cockTailId": "14053",
        "name": "Mother's Milk",
        "tags": [],
        "instructions": "Shake over ice, strain. Serves two.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7stuuh1504885399.jpg",
        "otherImage": null,
        "ingredients": [
            "Goldschlager",
            "Butterscotch schnapps",
            "Milk"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "14065",
        "name": "Zippy's Revenge",
        "tags": [],
        "instructions": "Mix Kool-Aid to taste then add Rum and ammaretto. shake well to disolve the sugar in the Kool-Aid... serve cold",
        "image": "https://www.thecocktaildb.com/images/media/drink/1sqm7n1485620312.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Rum",
            "Kool-Aid"
        ],
        "measurements": [
            "2 oz ",
            "2 oz ",
            "4 oz Grape "
        ]
    },
    {
        "cockTailId": "14071",
        "name": "Belgian Blue",
        "tags": [],
        "instructions": "Just pour all ingredients in the glass and stir...",
        "image": "https://www.thecocktaildb.com/images/media/drink/jylbrq1582580066.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Coconut liqueur",
            "Blue Curacao",
            "Sprite"
        ],
        "measurements": [
            "2 cl ",
            "1 cl ",
            "1 cl ",
            "Fill with "
        ]
    },
    {
        "cockTailId": "14087",
        "name": "Red Snapper",
        "tags": [],
        "instructions": "One shot each, shake n shoot",
        "image": "https://www.thecocktaildb.com/images/media/drink/7p607y1504735343.jpg",
        "otherImage": null,
        "ingredients": [
            "Crown Royal",
            "Amaretto",
            "Cranberry juice"
        ],
        "measurements": [
            "1 shot ",
            "1 shot ",
            "1 shot "
        ]
    },
    {
        "cockTailId": "14095",
        "name": "Jamaica Kiss",
        "tags": [],
        "instructions": "Fill a tumbler with ice cubes. Add a shot of Tia Maria and a shot of Jamaican light rum. Fill the tumbler with milk. Blend until smooth and serve immediately.",
        "image": "https://www.thecocktaildb.com/images/media/drink/urpvvv1441249549.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee liqueur",
            "Light rum",
            "Ice",
            "Milk"
        ],
        "measurements": [
            "1 shot ",
            "1 shot Jamaican ",
            "cubes"
        ]
    },
    {
        "cockTailId": "14107",
        "name": "Absolut Summertime",
        "tags": [],
        "instructions": "Add all ingredients except lemon to shaker filled with ice. Cover and shake vigorously. Strain contents into ice filled collins glass. Garnish with lemon.",
        "image": "https://www.thecocktaildb.com/images/media/drink/trpxxs1472669662.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Citron",
            "Sweet and sour",
            "Sprite",
            "Soda water",
            "Lemon"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3/4 oz ",
            "1/2 oz ",
            "3 oz ",
            "1 slice "
        ]
    },
    {
        "cockTailId": "14133",
        "name": "Cosmopolitan Martini",
        "tags": [],
        "instructions": "Pour all ingredients in mixing glass half filled with ice, shake and strain into chilled Martini glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg",
        "otherImage": null,
        "ingredients": [
            "Cointreau",
            "Vodka",
            "Lime",
            "Cranberry juice"
        ],
        "measurements": [
            "1/2 oz ",
            "1 oz ",
            "Juice of 1/2 ",
            "1 splash "
        ]
    },
    {
        "cockTailId": "14157",
        "name": "Ziemes Martini Apfelsaft",
        "tags": [],
        "instructions": "Serve without ice. At least the juice shold have room temperature.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xnzr2p1485619687.jpg",
        "otherImage": null,
        "ingredients": [
            "Vermouth",
            "Apple juice"
        ],
        "measurements": [
            "4 cl ",
            "16 cl "
        ]
    },
    {
        "cockTailId": "14167",
        "name": "Vodka Martini",
        "tags": [],
        "instructions": "Shake the vodka and vermouth together with a number of ice cubes, strain into a cocktail glass, add the olive and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Dry Vermouth",
            "Olive"
        ],
        "measurements": [
            "1 1/2 oz ",
            "3/4 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "14181",
        "name": "Cafe Savoy",
        "tags": [],
        "instructions": "Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vqwptt1441247711.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Milk",
            "Triple sec",
            "Brandy"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "14209",
        "name": "Mocha-Berry",
        "tags": [],
        "instructions": "pour 6 oz. of coffee in a mug or Irish coffee cup. add coca mix and chambord, mix well and top off with whipped cream.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vtwyyx1441246448.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Chambord raspberry liqueur",
            "Cocoa powder",
            "Whipped cream"
        ],
        "measurements": [
            "6 oz ",
            "2 oz ",
            "2 tblsp "
        ]
    },
    {
        "cockTailId": "14229",
        "name": "747",
        "tags": [],
        "instructions": "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
        "image": "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Baileys irish cream",
            "Frangelico"
        ],
        "measurements": [
            "1/3 part ",
            "1/3 part ",
            "1/3 part "
        ]
    },
    {
        "cockTailId": "14272",
        "name": "Addison Special",
        "tags": [],
        "instructions": "Combine ingredients in the order listed into a shaker. Fill half full with ice and shake well. Strain into glass with ice and garnish with a cherry and orange wedge.",
        "image": "https://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Grenadine",
            "Orange juice"
        ],
        "measurements": [
            "1 shot ",
            "1 tblsp ",
            "Fill with "
        ]
    },
    {
        "cockTailId": "14282",
        "name": "California Root Beer",
        "tags": [],
        "instructions": "Put Kahlua and Galliano in highball glass fill with soda",
        "image": "https://www.thecocktaildb.com/images/media/drink/rsxuyr1472719526.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Galliano",
            "Soda water"
        ],
        "measurements": [
            "3/4 oz ",
            "3/4 oz ",
            "Fill with "
        ]
    },
    {
        "cockTailId": "14356",
        "name": "Blind Russian",
        "tags": [],
        "instructions": "Fill glass with ice. Add all liquers. Add milk. shake.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wxuqvr1472720408.jpg",
        "otherImage": null,
        "ingredients": [
            "Baileys irish cream",
            "Godiva liqueur",
            "Kahlua",
            "Butterscotch schnapps",
            "Milk"
        ],
        "measurements": [
            "3/4 oz ",
            "3/4 oz ",
            "3/4 oz ",
            "1/2 oz ",
            " to fill\n"
        ]
    },
    {
        "cockTailId": "14360",
        "name": "Absolut Sex",
        "tags": [],
        "instructions": "Shake Absolut Kurant, Midori, and Cranberry juice in shaker with ice: Strain into rocks glass: Splash of seven on top.Absolut Sex.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xtrvtx1472668436.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Kurant",
            "Midori melon liqueur",
            "Cranberry juice",
            "Sprite"
        ],
        "measurements": [
            "3/4 oz ",
            "3/4 oz ",
            "1 oz ",
            "1 splash "
        ]
    },
    {
        "cockTailId": "14364",
        "name": "Aztec Punch",
        "tags": [],
        "instructions": "Mix all ingredients in a pitcher. Mix thoroughly and pour into whatever is available, the bigger the better! This drink packs a big punch, so don't over do it.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg",
        "otherImage": null,
        "ingredients": [
            "Lemonade",
            "Vodka",
            "Rum",
            "Ginger ale"
        ],
        "measurements": [
            "1 can ",
            "5 oz ",
            "7 oz ",
            "About 1 bottle "
        ]
    },
    {
        "cockTailId": "14366",
        "name": "Lemon Drop",
        "tags": [
            "IBA",
            "NewEra"
        ],
        "instructions": "Shake and strain into a chilled cocktail glass rimmed with sugar.",
        "image": "https://www.thecocktaildb.com/images/media/drink/mtpxgk1504373297.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Vodka",
            "Cointreau",
            "Lemon"
        ],
        "measurements": [
            "1 1/2 shot ",
            "1 1/2 shot ",
            "Juice of 1 wedge "
        ]
    },
    {
        "cockTailId": "14372",
        "name": "Absolut limousine",
        "tags": [],
        "instructions": "Fill Absolut into a glass. Add Lime juice. Add Ice and lime wedges.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ssqpyw1472719844.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Citron",
            "Lime juice",
            "Ice",
            "Tonic water"
        ],
        "measurements": [
            "2/3 ",
            "1/3 ",
            "Fill with ",
            "Top it up with "
        ]
    },
    {
        "cockTailId": "14374",
        "name": "Absolut Evergreen",
        "tags": [],
        "instructions": "Mix, pour over ice and top up with Bitter Lemon.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wrxrxp1472812609.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Citron",
            "Pisang Ambon",
            "Ice",
            "Bitter lemon"
        ],
        "measurements": [
            "2/3 part ",
            "1/3 part ",
            "cubes"
        ]
    },
    {
        "cockTailId": "14378",
        "name": "Lunch Box",
        "tags": [],
        "instructions": "Fill a pint glass almost full with beer. Then fill the rest with orange juice (careful not to fill it to the top). Then take the shot of Amaretto and drop it in.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qywpvt1454512546.jpg",
        "otherImage": null,
        "ingredients": [
            "Beer",
            "Amaretto",
            "Orange juice"
        ],
        "measurements": [
            "3/4 bottle ",
            "1 shot ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "14446",
        "name": "Kool-Aid Slammer",
        "tags": [],
        "instructions": "Fill half the shot glass with the kool-aid first. Then put a paper towel over the top of the glass and slowly pour in the vodka. If you do it right, you should be able to see that the two liquids are separated, with the vodka on top. Now slam it! The last thing you'll taste is the kool-aid.",
        "image": "https://www.thecocktaildb.com/images/media/drink/kugu2m1504735473.jpg",
        "otherImage": null,
        "ingredients": [
            "Kool-Aid",
            "Vodka"
        ],
        "measurements": [
            "1/2 oz Grape ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "14456",
        "name": "Kurant Tea",
        "tags": [],
        "instructions": "Pour Absolut Kurant into a comfortably big tea-cup. Add the not too hot(!) apple tea and, if you like, some sugar. Enjoy!",
        "image": "https://www.thecocktaildb.com/images/media/drink/xrsrpr1441247464.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Kurant",
            "Tea",
            "Sugar"
        ],
        "measurements": [
            "4 cl ",
            "Turkish apple ",
            " (if needed)\n"
        ]
    },
    {
        "cockTailId": "14466",
        "name": "Dirty Nipple",
        "tags": [],
        "instructions": "This is a layered shot - the Bailey's must be on top",
        "image": "https://www.thecocktaildb.com/images/media/drink/vtyqrt1461866508.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Sambuca",
            "Baileys irish cream"
        ],
        "measurements": []
    },
    {
        "cockTailId": "14482",
        "name": "Darkwood Sling",
        "tags": [],
        "instructions": "There are many good cherry liqueurs you can use, but I prefere Heering. Add one share of the liqueur. Then you add one share of Soda. For a sour sling use Tonic (most people prefer the drink without Tonic). Afterwards you fill the glass with Orange Juice and ice cubes.",
        "image": "https://www.thecocktaildb.com/images/media/drink/sxxsyq1472719303.jpg",
        "otherImage": null,
        "ingredients": [
            "Cherry Heering",
            "Soda water",
            "Orange juice",
            "Ice"
        ],
        "measurements": [
            "1 part ",
            "1 part ",
            "1 part ",
            "cubes"
        ]
    },
    {
        "cockTailId": "14538",
        "name": "Bumble Bee",
        "tags": [],
        "instructions": "This is a layered shot. First pour the Bailey's into the shot glass. Then take an upside down spoon and touch it to the inside wall of the glass. Carefully add the Kahlua. Repeat this process for the Sambuca. If done properly, the alcohol will stay separated and resemble a bumble bee. Enjoy!!!",
        "image": "https://www.thecocktaildb.com/images/media/drink/uwqpvv1461866378.jpg",
        "otherImage": null,
        "ingredients": [
            "Baileys irish cream",
            "Kahlua",
            "Sambuca"
        ],
        "measurements": [
            "1/3 oz ",
            "1/3 oz ",
            "1/3 oz "
        ]
    },
    {
        "cockTailId": "14560",
        "name": "A.D.M. (After Dinner Mint)",
        "tags": [],
        "instructions": "shake vigorously",
        "image": "https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg",
        "otherImage": null,
        "ingredients": [
            "White Creme de Menthe",
            "Southern Comfort",
            "Vodka",
            "Hot chocolate"
        ],
        "measurements": [
            "1/2 oz ",
            "3/4 oz ",
            "1/2 oz ",
            "Fill with "
        ]
    },
    {
        "cockTailId": "14564",
        "name": "A Splash of Nash",
        "tags": [],
        "instructions": "Drop shot glass with banana & melon liquers into a 9 oz hi- ball glass containing soda water and cranberry juice. Drink in one shot.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rsvtrr1472668201.jpg",
        "otherImage": null,
        "ingredients": [
            "Cranberry juice",
            "Soda water",
            "Midori melon liqueur",
            "Creme de Banane"
        ],
        "measurements": [
            "2 oz ",
            "2 oz ",
            "0.5 oz ",
            "0.5 oz "
        ]
    },
    {
        "cockTailId": "14578",
        "name": "Amaretto Sunrise",
        "tags": [],
        "instructions": "Mix together the amaretto and orange juice. Pour into glass and then add the grenadine untill you see the sunrise.",
        "image": "https://www.thecocktaildb.com/images/media/drink/akcpsh1493070267.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Orange juice",
            "Grenadine"
        ],
        "measurements": [
            "1 cl ",
            "4 oz ",
            "1/4 cl "
        ]
    },
    {
        "cockTailId": "14584",
        "name": "Arizona Stingers",
        "tags": [],
        "instructions": "Place ice cubes in the hurricane glass . Add the 2 HEAPING shots of Absolute Vodka (Note: You can add as many shots of Absolute as you want!) Fill the rest of glass with the Arizona Icetea with lemon. Stir to mix using a spoon. Drink up and enjoy!!!!!!!",
        "image": "https://www.thecocktaildb.com/images/media/drink/y7w0721493068255.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Vodka",
            "Iced tea"
        ],
        "measurements": [
            "2 shots ",
            "12 oz lemon "
        ]
    },
    {
        "cockTailId": "14586",
        "name": "Orange Push-up",
        "tags": [],
        "instructions": "Combine liquors in a blender. Add a half scoop of ice and blend. Garnish with an orange and cherry flag. So good it will melt in your mouth!!!",
        "image": "https://www.thecocktaildb.com/images/media/drink/mgf0y91503565781.jpg",
        "otherImage": null,
        "ingredients": [
            "Spiced rum",
            "Grenadine",
            "Orange juice",
            "Sour mix"
        ],
        "measurements": [
            "1.5 oz ",
            "0.5 oz ",
            "4 oz ",
            "1 splash "
        ]
    },
    {
        "cockTailId": "14588",
        "name": "151 Florida Bushwacker",
        "tags": [],
        "instructions": "Combine all ingredients. Blend until smooth. Garnish with chocolate shavings if desired.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
        "otherImage": null,
        "ingredients": [
            "Malibu rum",
            "Light rum",
            "151 proof rum",
            "Dark Creme de Cacao",
            "Cointreau",
            "Milk",
            "Coconut liqueur",
            "Vanilla ice-cream"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz Bacardi ",
            "1 oz ",
            "1 oz ",
            "3 oz ",
            "1 oz ",
            "1 cup "
        ]
    },
    {
        "cockTailId": "14594",
        "name": "Zizi Coin-coin",
        "tags": [],
        "instructions": "Pour 5cl of Cointreau on ice, add 2cl of fresh lemon (or lime) juice, stir gently, and finally add slices of lemon/lime in glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/0fbo2t1485620752.jpg",
        "otherImage": null,
        "ingredients": [
            "Cointreau",
            "Lemon juice",
            "Ice",
            "Lemon"
        ],
        "measurements": [
            "5 cl ",
            "2 cl ",
            "cubes",
            " or lime\n"
        ]
    },
    {
        "cockTailId": "14598",
        "name": "50/50",
        "tags": [],
        "instructions": "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
        "otherImage": null,
        "ingredients": [
            "Vanilla vodka",
            "Grand Marnier",
            "Orange juice"
        ],
        "measurements": [
            "2 1/2 oz ",
            "1 splash ",
            "Fill with "
        ]
    },
    {
        "cockTailId": "14602",
        "name": "Tequila Surprise",
        "tags": [],
        "instructions": "Fill shot glass with Tequila. Add drops of Tobasco sauce.",
        "image": "https://www.thecocktaildb.com/images/media/drink/8189p51504735581.jpg",
        "otherImage": null,
        "ingredients": [
            "Tequila",
            "Tabasco sauce"
        ],
        "measurements": [
            "full glass ",
            "About 8 drops "
        ]
    },
    {
        "cockTailId": "14608",
        "name": "Cream Soda",
        "tags": [],
        "instructions": "Pour 1oz of Spiced Rum into a highball glass with ice. Fill with Ginger Ale.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yqstxr1479209367.jpg",
        "otherImage": null,
        "ingredients": [
            "Spiced rum",
            "Ginger ale"
        ],
        "measurements": [
            "1 oz "
        ]
    },
    {
        "cockTailId": "14622",
        "name": "Arctic Fish",
        "tags": [],
        "instructions": "Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Grape soda",
            "Orange juice",
            "Ice",
            "Candy"
        ],
        "measurements": [
            "1/3 part ",
            "1/3 part ",
            "1/3 part ",
            "lots ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "14642",
        "name": "Grim Reaper",
        "tags": [],
        "instructions": "Mix Kahlua and 151 in glass. Quickly add ice and pour grenadine over ice to give ice red tint.",
        "image": "https://www.thecocktaildb.com/images/media/drink/kztu161504883192.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "151 proof rum",
            "Grenadine"
        ],
        "measurements": [
            "1 oz ",
            "1 oz Bacardi ",
            "1 dash "
        ]
    },
    {
        "cockTailId": "14688",
        "name": "Freddy Kruger",
        "tags": [],
        "instructions": "make it an ample size shot!!",
        "image": "https://www.thecocktaildb.com/images/media/drink/tuppuq1461866798.jpg",
        "otherImage": null,
        "ingredients": [
            "Jägermeister",
            "Sambuca",
            "Vodka"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "14730",
        "name": "Bubble Gum",
        "tags": [],
        "instructions": "Layer in order into a shot glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/spuurv1468878783.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Banana liqueur",
            "Orange juice",
            "Peach schnapps"
        ],
        "measurements": [
            "1/4 ",
            "1/4 ",
            "1/4 ",
            "1/4 "
        ]
    },
    {
        "cockTailId": "14752",
        "name": "Kiwi Lemon",
        "tags": [],
        "instructions": "Mix in highball glass. Stirr. Garnish with slice of kiwi.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tpupvr1478251697.jpg",
        "otherImage": null,
        "ingredients": [
            "Kiwi liqueur",
            "Bitter lemon",
            "Ice"
        ],
        "measurements": [
            "1 part ",
            "2 parts ",
            "cubes"
        ]
    },
    {
        "cockTailId": "14782",
        "name": "Hot Creamy Bush",
        "tags": [],
        "instructions": "Combine all ingredients in glass",
        "image": "https://www.thecocktaildb.com/images/media/drink/spvrtp1472668037.jpg",
        "otherImage": null,
        "ingredients": [
            "Irish whiskey",
            "Baileys irish cream",
            "Coffee"
        ],
        "measurements": [
            "1 shot ",
            "3/4 shot ",
            "6 oz hot "
        ]
    },
    {
        "cockTailId": "14842",
        "name": "Midnight Mint",
        "tags": [],
        "instructions": "If available, rim cocktail (Martini) glass with sugar syrup then dip into chocolate flakes or powder. Add ingredients into shaker with ice. Shake well then strain into cocktail glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/svuvrq1441208310.jpg",
        "otherImage": null,
        "ingredients": [
            "Baileys irish cream",
            "White Creme de Menthe",
            "Cream"
        ],
        "measurements": [
            "1 oz ",
            "3/4 oz ",
            "3/4 oz double "
        ]
    },
    {
        "cockTailId": "14860",
        "name": "Talos Coffee",
        "tags": [],
        "instructions": "Add your GM and then add your coffee.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rswqpy1441246518.jpg",
        "otherImage": null,
        "ingredients": [
            "Grand Marnier",
            "Coffee"
        ],
        "measurements": [
            "3 parts ",
            "1 part "
        ]
    },
    {
        "cockTailId": "14888",
        "name": "Zinger",
        "tags": [],
        "instructions": "Get a shot glass and pour in three shots of the schnapps. Do the same with the Surge Cola. Then down it like Scheetz would.",
        "image": "https://www.thecocktaildb.com/images/media/drink/iixv4l1485620014.jpg",
        "otherImage": null,
        "ingredients": [
            "Peachtree schnapps",
            "Surge"
        ],
        "measurements": [
            "4 shots ",
            "4 shots "
        ]
    },
    {
        "cockTailId": "14956",
        "name": "Jello shots",
        "tags": [],
        "instructions": "Boil 3 cups of water then add jello. Mix jello and water until jello is completely disolved. Add the two cups of vodka and mix together. Pour mixture into plastic shot glasses and chill until firm. Then, eat away...",
        "image": "https://www.thecocktaildb.com/images/media/drink/l0smzo1504884904.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Jello",
            "Water"
        ],
        "measurements": [
            "2 cups ",
            "3 packages ",
            "3 cups "
        ]
    },
    {
        "cockTailId": "14978",
        "name": "Rum Punch",
        "tags": [],
        "instructions": "Mix all ingredients in a punch bowl and serve.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg",
        "otherImage": null,
        "ingredients": [
            "Rum",
            "Ginger ale",
            "Fruit punch",
            "Orange juice",
            "Ice"
        ],
        "measurements": [
            "mikey bottle ",
            "large bottle ",
            "355 ml frozen ",
            "355 ml frozen ",
            "crushed "
        ]
    },
    {
        "cockTailId": "15006",
        "name": "Turkeyball",
        "tags": [],
        "instructions": "Shake with ice and strain into a shot glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rxurpr1441554292.jpg",
        "otherImage": null,
        "ingredients": [
            "Wild Turkey",
            "Amaretto",
            "Pineapple juice"
        ],
        "measurements": [
            "1 oz ",
            "3/4 oz ",
            "1 splash "
        ]
    },
    {
        "cockTailId": "15024",
        "name": "Absolutely Cranberry Smash",
        "tags": [],
        "instructions": "Stir ingredients together. Serve over ice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Vodka",
            "Cranberry juice",
            "Ginger ale",
            "Ice"
        ],
        "measurements": [
            "2 oz ",
            "4 oz ",
            "2 oz ",
            "Add "
        ]
    },
    {
        "cockTailId": "15026",
        "name": "Kiss me Quick",
        "tags": [],
        "instructions": "mix in the glass",
        "image": "https://www.thecocktaildb.com/images/media/drink/m7iaxu1504885119.jpg",
        "otherImage": null,
        "ingredients": [
            "Cranberry vodka",
            "Apfelkorn",
            "Schweppes Russchian",
            "Apple juice",
            "Ice"
        ],
        "measurements": [
            "4 cl ",
            "2 cl ",
            "7 cl ",
            "8 cl ",
            "cubes"
        ]
    },
    {
        "cockTailId": "15082",
        "name": "Royal Flush",
        "tags": [],
        "instructions": "Pour all the ingredients into tumbler over ice. Strain into glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/7rnm8u1504888527.jpg",
        "otherImage": null,
        "ingredients": [
            "Crown Royal",
            "Peach schnapps",
            "Chambord raspberry liqueur",
            "Cranberry juice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz ",
            "1/2 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "15086",
        "name": "Limona Corona",
        "tags": [],
        "instructions": "Open the Corona. Fill the empty space in the neck in the bottle with the rum. The bottle should be filled to the top. Plug the bottle with your thumb or the palm of your hand. Turn the bottle upside-down so the rum and beer mix. Turn the bottle rightside-up, unplug, and drink.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wwqrsw1441248662.jpg",
        "otherImage": null,
        "ingredients": [
            "Corona",
            "Bacardi Limon"
        ],
        "measurements": [
            "1 bottle ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "15092",
        "name": "Pysch Vitamin Light",
        "tags": [],
        "instructions": "Shake with ice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg",
        "otherImage": null,
        "ingredients": [
            "Orange juice",
            "Apple juice",
            "Pineapple juice",
            "Ice"
        ],
        "measurements": [
            "1 part ",
            "1 part ",
            "1 part "
        ]
    },
    {
        "cockTailId": "15106",
        "name": "Apello",
        "tags": [],
        "instructions": "Stirr. Grnish with maraschino cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
        "otherImage": null,
        "ingredients": [
            "Orange juice",
            "Grapefruit juice",
            "Apple juice",
            "Maraschino cherry"
        ],
        "measurements": [
            "4 cl ",
            "3 cl ",
            "1 cl ",
            "1 "
        ]
    },
    {
        "cockTailId": "15178",
        "name": "Texas Rattlesnake",
        "tags": [],
        "instructions": "Mix all ingredients and Shake well. Sweet at first, with a BITE at the end...",
        "image": "https://www.thecocktaildb.com/images/media/drink/rtohqp1504889750.jpg",
        "otherImage": null,
        "ingredients": [
            "Yukon Jack",
            "Cherry brandy",
            "Southern Comfort",
            "Sweet and sour"
        ],
        "measurements": [
            "1 part ",
            "1/2 part ",
            "1 part ",
            "1 splash "
        ]
    },
    {
        "cockTailId": "15182",
        "name": "After sex",
        "tags": [],
        "instructions": "Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar",
        "image": "https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Creme de Banane",
            "Orange juice"
        ],
        "measurements": [
            "2 cl ",
            "1 cl "
        ]
    },
    {
        "cockTailId": "15184",
        "name": "San Francisco",
        "tags": [],
        "instructions": "Take a tall glass and put in a few ice cubes, fill the vodka over it and fill with juice then the \"creme\", to end fill in the grenadine but very carefully at the side of the glass so it will lay down in the bottom. garnish with orange and strawberry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/szmj2d1504889961.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Creme de Banane",
            "Grenadine",
            "Orange juice"
        ],
        "measurements": [
            "2 cl ",
            "2 cl "
        ]
    },
    {
        "cockTailId": "15194",
        "name": "Amaretto Shake",
        "tags": [],
        "instructions": "Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg",
        "otherImage": null,
        "ingredients": [
            "Chocolate ice-cream",
            "Brandy",
            "Amaretto"
        ],
        "measurements": [
            "2 scoops ",
            "2 oz ",
            "2 oz "
        ]
    },
    {
        "cockTailId": "15200",
        "name": "A Day at the Beach",
        "tags": [
            "Sweet"
        ],
        "instructions": "Shake Rum, Amaretto, and Orange Juice in a shaker filled with ice. Strain over ice into a highball glass. Add Grenadine and garnish with a Pineapple Wedge and a Strawberry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/trptts1454514474.jpg",
        "otherImage": null,
        "ingredients": [
            "Coconut rum",
            "Amaretto",
            "Orange juice",
            "Grenadine"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz ",
            "4 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "15224",
        "name": "Malibu Twister",
        "tags": [],
        "instructions": "Add rum & trister then, add cranberry jucie,stir",
        "image": "https://www.thecocktaildb.com/images/media/drink/2dwae41504885321.jpg",
        "otherImage": null,
        "ingredients": [
            "Malibu rum",
            "Tropicana",
            "Cranberry juice"
        ],
        "measurements": [
            "2 parts ",
            "2 parts ",
            "1 part "
        ]
    },
    {
        "cockTailId": "15226",
        "name": "Space Odyssey",
        "tags": [],
        "instructions": "Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vxtjbx1504817842.jpg",
        "otherImage": null,
        "ingredients": [
            "151 proof rum",
            "Malibu rum",
            "Pineapple juice",
            "Orange juice",
            "Grenadine",
            "Cherries"
        ],
        "measurements": [
            "1 shot Bacardi ",
            "1 shot ",
            "1 shot "
        ]
    },
    {
        "cockTailId": "15254",
        "name": "Zenmeister",
        "tags": [],
        "instructions": "Mix together and enjoy",
        "image": "https://www.thecocktaildb.com/images/media/drink/qyuvsu1479209462.jpg",
        "otherImage": null,
        "ingredients": [
            "Jägermeister",
            "Root beer"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "15266",
        "name": "Avalon",
        "tags": [],
        "instructions": "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
        "image": "https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Pisang Ambon",
            "Apple juice",
            "Lemon juice",
            "Lemonade"
        ],
        "measurements": [
            "3 parts",
            "1 part ",
            "6 parts ",
            "1 1/2 part "
        ]
    },
    {
        "cockTailId": "15288",
        "name": "252",
        "tags": [],
        "instructions": "Add both ingredients to shot glass, shoot, and get drunk quick",
        "image": "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
        "otherImage": null,
        "ingredients": [
            "151 proof rum",
            "Wild Turkey"
        ],
        "measurements": [
            "1/2 shot Bacardi ",
            "1/2 shot "
        ]
    },
    {
        "cockTailId": "15300",
        "name": "3-Mile Long Island Iced Tea",
        "tags": [],
        "instructions": "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Light rum",
            "Tequila",
            "Triple sec",
            "Vodka",
            "Coca-Cola",
            "Sweet and sour",
            "Bitters",
            "Lemon"
        ],
        "measurements": [
            "1/2 oz",
            "1/2 oz",
            "1/2 oz",
            "1/2 oz",
            "1/2 oz",
            "1/2 oz",
            "1-2 dash ",
            "1 wedge ",
            "Garnish with"
        ]
    },
    {
        "cockTailId": "15328",
        "name": "Zorro",
        "tags": [],
        "instructions": "add all and pour black coffee and add whipped cream on top.",
        "image": "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
        "otherImage": null,
        "ingredients": [
            "Sambuca",
            "Baileys irish cream",
            "White Creme de Menthe"
        ],
        "measurements": [
            "2 cl ",
            "2 cl ",
            "2 cl "
        ]
    },
    {
        "cockTailId": "15330",
        "name": "Orange Crush",
        "tags": [],
        "instructions": "Add all ingredients to tumbler-Pour as shot",
        "image": "https://www.thecocktaildb.com/images/media/drink/zvoics1504885926.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Triple sec",
            "Orange juice"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "15346",
        "name": "155 Belmont",
        "tags": [],
        "instructions": "Blend with ice. Serve in a wine glass. Garnish with carrot.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        "otherImage": null,
        "ingredients": [
            "Dark rum",
            "Light rum",
            "Vodka",
            "Orange juice"
        ],
        "measurements": [
            "1 shot ",
            "2 shots ",
            "1 shot ",
            "1 shot "
        ]
    },
    {
        "cockTailId": "15395",
        "name": "1-900-FUK-MEUP",
        "tags": [],
        "instructions": "Shake ingredients in a mixing tin filled with ice cubes. Strain into a rocks glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Kurant",
            "Grand Marnier",
            "Chambord raspberry liqueur",
            "Midori melon liqueur",
            "Malibu rum",
            "Amaretto",
            "Cranberry juice",
            "Pineapple juice"
        ],
        "measurements": [
            "1/2 oz ",
            "1/4 oz ",
            "1/4 oz ",
            "1/4 oz ",
            "1/4 oz ",
            "1/4 oz ",
            "1/2 oz ",
            "1/4 oz "
        ]
    },
    {
        "cockTailId": "15403",
        "name": "Vodka Russian",
        "tags": [],
        "instructions": "Mix it as a ordinary drink .",
        "image": "https://www.thecocktaildb.com/images/media/drink/rpttur1454515129.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Schweppes Russchian"
        ],
        "measurements": [
            "2 oz "
        ]
    },
    {
        "cockTailId": "15409",
        "name": "Danbooka",
        "tags": [],
        "instructions": "pour it in and mix it.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vurrxr1441246074.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Everclear"
        ],
        "measurements": [
            "3 parts ",
            "1 part "
        ]
    },
    {
        "cockTailId": "15423",
        "name": "110 in the shade",
        "tags": [],
        "instructions": "Drop shooter in glass. Fill with beer",
        "image": "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
        "otherImage": null,
        "ingredients": [
            "Lager",
            "Tequila"
        ],
        "measurements": [
            "16 oz ",
            "1.5 oz "
        ]
    },
    {
        "cockTailId": "15427",
        "name": "Grand Blue",
        "tags": [],
        "instructions": "Serve in an old fashioned glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vsrsqu1472761749.jpg",
        "otherImage": null,
        "ingredients": [
            "Malibu rum",
            "Peach schnapps",
            "Blue Curacao",
            "Sweet and sour"
        ],
        "measurements": [
            "1 1/2 cl ",
            "1 1/2 cl ",
            "1 1/2 cl ",
            "3 cl "
        ]
    },
    {
        "cockTailId": "15511",
        "name": "Baby Eskimo",
        "tags": [],
        "instructions": "Leave ice-cream out for about 10 minutes. Add ingredients in order, stir with chopstick (butter knife or spoon works too). Consume immediately and often. Nice and light, great for following a heavy drink.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wywrtw1472720227.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Milk",
            "Vanilla ice-cream"
        ],
        "measurements": [
            "2 oz ",
            "8 oz ",
            "2 scoops "
        ]
    },
    {
        "cockTailId": "15515",
        "name": "Tennesee Mud",
        "tags": [],
        "instructions": "Mix Coffee, Jack Daniels and Amaretto. Add Cream on top.",
        "image": "https://www.thecocktaildb.com/images/media/drink/txruqv1441245770.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Jack Daniels",
            "Amaretto",
            "Whipped cream"
        ],
        "measurements": [
            "8 oz ",
            "4 oz ",
            "4 oz "
        ]
    },
    {
        "cockTailId": "15521",
        "name": "Swedish Coffee",
        "tags": [],
        "instructions": "Pour the coffee in an ordinary coffee cup. Add the aquavit. Add sugar by taste. Stir and have a nice evening (morning)",
        "image": "https://www.thecocktaildb.com/images/media/drink/ywtrvt1441246783.jpg",
        "otherImage": null,
        "ingredients": [
            "Coffee",
            "Aquavit",
            "Sugar"
        ],
        "measurements": [
            "1 cup",
            "4 cl ",
            "By taste "
        ]
    },
    {
        "cockTailId": "15567",
        "name": "Adam Sunrise",
        "tags": [],
        "instructions": "Fill blender up with ice. Fill half with Bartons Vodka. Put 10 tsp of sugar, add 1/2 can lemonade concentrate, fill to top with water. Blend for 60 seconds.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Lemonade",
            "Water",
            "Sugar"
        ],
        "measurements": [
            "1/2 ",
            "1/2 can ",
            "1/2 ",
            "10 tsp "
        ]
    },
    {
        "cockTailId": "15597",
        "name": "Absolut Stress #2",
        "tags": [],
        "instructions": "Mix well. Garnish with Orange and Cherry. Enjoy",
        "image": "https://www.thecocktaildb.com/images/media/drink/xuyqrw1472811825.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Vodka",
            "Peach schnapps",
            "Coconut liqueur",
            "Cranberry juice",
            "Pineapple juice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "1 1/2 oz ",
            "1 1/2 oz "
        ]
    },
    {
        "cockTailId": "15615",
        "name": "Chocolate Monkey",
        "tags": [],
        "instructions": "blend liqeuors with ice-cream, milk and syrup. pour into parfait glass, top with whipped cream and garnish with banana and cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tyvpxt1468875212.jpg",
        "otherImage": null,
        "ingredients": [
            "Banana liqueur",
            "Creme de Cacao",
            "Chocolate ice-cream",
            "Chocolate syrup",
            "Chocolate milk",
            "Whipped cream",
            "Cherry",
            "Banana"
        ],
        "measurements": [
            "1 shot ",
            "2 shots ",
            "2 scoops ",
            "1 oz ",
            "4 oz ",
            "1 ",
            "1 ",
            "1 piece "
        ]
    },
    {
        "cockTailId": "15639",
        "name": "Texas Sling",
        "tags": [],
        "instructions": "Blend with Ice until smooth. Serve in a tulip glass, top with whip cream.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ypl13s1504890158.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Irish cream",
            "Amaretto",
            "151 proof rum",
            "Cream"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz Bacardi ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "15675",
        "name": "A midsummernight dream",
        "tags": [],
        "instructions": "Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water",
        "image": "https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Kirschwasser",
            "Strawberry liqueur",
            "Strawberries",
            "Schweppes Russchian"
        ],
        "measurements": [
            "2 oz ",
            "1 oz ",
            "1 tsp ",
            "5 "
        ]
    },
    {
        "cockTailId": "15691",
        "name": "Zoksel",
        "tags": [],
        "instructions": "No specific mixinginstructions, just poor every ingredient in one glass. The lemon goes with it.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg",
        "otherImage": null,
        "ingredients": [
            "Beer",
            "Root beer",
            "Lemonade",
            "Coca-Cola",
            "7-Up",
            "Creme de Cassis",
            "Lemon"
        ],
        "measurements": [
            " slice\n"
        ]
    },
    {
        "cockTailId": "15761",
        "name": "Quick-sand",
        "tags": [],
        "instructions": "Simply add the orange juice, quite a quick pour in order to mix the sambucca with the orange juice. The juice MUST have fruit pulp!",
        "image": "https://www.thecocktaildb.com/images/media/drink/vprxqv1478963533.jpg",
        "otherImage": null,
        "ingredients": [
            "Black Sambuca",
            "Orange juice"
        ],
        "measurements": [
            "25 ml ",
            "Add 250 ml "
        ]
    },
    {
        "cockTailId": "15789",
        "name": "Snakebite and Black",
        "tags": [],
        "instructions": "Put blackcurrant squash in first up to about 1cm in glass. Then add the larger and cider one after another.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rssvwv1441248863.jpg",
        "otherImage": null,
        "ingredients": [
            "Lager",
            "Cider",
            "Blackcurrant squash"
        ],
        "measurements": [
            "1/2 pint ",
            "1/2 pint ",
            "A little bit of "
        ]
    },
    {
        "cockTailId": "15801",
        "name": "Zimadori Zinger",
        "tags": [],
        "instructions": "Pour Zima in a collins glass over ice and then pour the shot of Midori. Don't stir. Garnish with a cherry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/bw8gzx1485619920.jpg",
        "otherImage": null,
        "ingredients": [
            "Midori melon liqueur",
            "Zima"
        ],
        "measurements": [
            "1.5 oz ",
            "12 oz "
        ]
    },
    {
        "cockTailId": "15813",
        "name": "Herbal flame",
        "tags": [],
        "instructions": "Pour Hot Damn 100 in bottom of a jar or regular glass. Fill the rest of the glass with sweet tea. Stir with spoon, straw, or better yet a cinnamon stick and leave it in.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rrstxv1441246184.jpg",
        "otherImage": null,
        "ingredients": [
            "Hot Damn",
            "Tea"
        ],
        "measurements": [
            "5 shots ",
            "very sweet "
        ]
    },
    {
        "cockTailId": "15825",
        "name": "Jamaican Coffee",
        "tags": [],
        "instructions": "Stir the rum, coffee and water together. Top with the whipped cream. Sprinkle with a pinch of well ground coffee and drink with a straw.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg",
        "otherImage": null,
        "ingredients": [
            "Rum",
            "Coffee",
            "Water",
            "Whipped cream"
        ],
        "measurements": [
            "1/6 glass ",
            "1/6 glass strong black ",
            "1/2 glass cold "
        ]
    },
    {
        "cockTailId": "15841",
        "name": "Mojito Extra",
        "tags": [],
        "instructions": "Put mint with lemon juice in a glas, mash the mint with a spoon, ice, rum & fill up with club soda. Top it with Angostura.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vwxrsw1478251483.jpg",
        "otherImage": null,
        "ingredients": [
            "Mint",
            "Lemon juice",
            "Dark rum",
            "Club soda",
            "Angostura bitters"
        ],
        "measurements": [
            "1/2 handful ",
            "3 cl ",
            "1/8 L Jamaican ",
            "1/8 L ",
            "8 drops "
        ]
    },
    {
        "cockTailId": "15849",
        "name": "Apricot punch",
        "tags": [],
        "instructions": "Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg",
        "otherImage": null,
        "ingredients": [
            "Apricot brandy",
            "Champagne",
            "Vodka",
            "7-Up",
            "Orange juice"
        ],
        "measurements": [
            "1 qt ",
            "4 fifth ",
            "1 fifth ",
            "4 L ",
            "1/2 gal "
        ]
    },
    {
        "cockTailId": "15853",
        "name": "B-52",
        "tags": [
            "IBA",
            "NewEra"
        ],
        "instructions": "Layer ingredients into a shot glass. Serve with a stirrer.",
        "image": "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
        "otherImage": null,
        "ingredients": [
            "Baileys irish cream",
            "Grand Marnier",
            "Kahlua"
        ],
        "measurements": [
            "1/3 ",
            "1/3 ",
            "1/4 "
        ]
    },
    {
        "cockTailId": "15941",
        "name": "Americano",
        "tags": [
            "IBA",
            "Classic"
        ],
        "instructions": "Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/709s6m1613655124.jpg",
        "otherImage": "https://commons.wikimedia.org/wiki/File:Martini_Americano.jpg",
        "ingredients": [
            "Campari",
            "Sweet Vermouth",
            "Lemon peel",
            "Orange peel"
        ],
        "measurements": [
            "1 oz ",
            "1 oz red ",
            "Twist of ",
            "Twist of "
        ]
    },
    {
        "cockTailId": "15951",
        "name": "Black Forest Shake",
        "tags": [],
        "instructions": "In a blender put ice cubes, chocolate syrup, cherry brandy, vodka, and milk. Blend very well.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xxtxsu1472720505.jpg",
        "otherImage": null,
        "ingredients": [
            "Ice",
            "Chocolate syrup",
            "Cherry brandy",
            "Vodka",
            "Milk"
        ],
        "measurements": [
            "cubes"
        ]
    },
    {
        "cockTailId": "15997",
        "name": "GG",
        "tags": [],
        "instructions": "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
        "otherImage": null,
        "ingredients": [
            "Galliano",
            "Ginger ale",
            "Ice"
        ],
        "measurements": [
            "2 1/2 shots "
        ]
    },
    {
        "cockTailId": "16031",
        "name": "Radler",
        "tags": [],
        "instructions": "Pour beer into large mug, slowly add the 7-up (or Sprite).",
        "image": "https://www.thecocktaildb.com/images/media/drink/xz8igv1504888995.jpg",
        "otherImage": null,
        "ingredients": [
            "Beer",
            "7-Up"
        ],
        "measurements": [
            "12 oz ",
            "12 oz "
        ]
    },
    {
        "cockTailId": "16041",
        "name": "Mudslinger",
        "tags": [],
        "instructions": "Add all contents to a large jug or punch bowl. Stir well!",
        "image": "https://www.thecocktaildb.com/images/media/drink/hepk6h1504885554.jpg",
        "otherImage": null,
        "ingredients": [
            "Southern Comfort",
            "Orange juice",
            "Pepsi Cola"
        ],
        "measurements": [
            "750 ml ",
            "1 L ",
            "750 ml "
        ]
    },
    {
        "cockTailId": "16047",
        "name": "Campari Beer",
        "tags": [],
        "instructions": "Use a 15 oz glass. Add Campari first. Fill with beer.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xsqrup1441249130.jpg",
        "otherImage": null,
        "ingredients": [
            "Lager",
            "Campari"
        ],
        "measurements": [
            "1 bottle ",
            "1 1/2 cl "
        ]
    },
    {
        "cockTailId": "16082",
        "name": "Almond Chocolate Coffee",
        "tags": [],
        "instructions": "Pour in order into coffee cup. Top with whipped creme and chocolate shcvings.",
        "image": "https://www.thecocktaildb.com/images/media/drink/jls02c1493069441.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Dark Creme de Cacao",
            "Coffee"
        ],
        "measurements": [
            "3/4 oz ",
            "1/2 oz ",
            "8 oz "
        ]
    },
    {
        "cockTailId": "16108",
        "name": "9 1/2 Weeks",
        "tags": [],
        "instructions": "Combine all ingredients in glass mixer. Chill and strain into Cocktail glass. Garnish with sliced strawberry.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Citron",
            "Orange Curacao",
            "Strawberry liqueur",
            "Orange juice"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "1 splash ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "16134",
        "name": "Absolutly Screwed Up",
        "tags": [],
        "instructions": "Shake it up it tasts better that way, but you can stir it if you want. 6 of those and you will be wasted for the rest of the night.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yvxrwv1472669728.jpg",
        "otherImage": null,
        "ingredients": [
            "Absolut Citron",
            "Orange juice",
            "Triple sec",
            "Ginger ale"
        ],
        "measurements": [
            "1 shot ",
            "1 shot ",
            "1 shot ",
            "Fill to top "
        ]
    },
    {
        "cockTailId": "16158",
        "name": "Whitecap Margarita",
        "tags": [],
        "instructions": "Place all ingredients in a blender and blend until smooth. This makes one drink.",
        "image": "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
        "otherImage": null,
        "ingredients": [
            "Ice",
            "Tequila",
            "Cream of coconut",
            "Lime juice"
        ],
        "measurements": [
            "1 cup ",
            "2 oz ",
            "1/4 cup ",
            "3 tblsp fresh "
        ]
    },
    {
        "cockTailId": "16176",
        "name": "Bellini Martini",
        "tags": [],
        "instructions": "Add ice cubes to shaker.\r\nAdd vodka.\r\nAdd peach schnapps.\r\nAdd peach nectar.\r\nShake.\r\nStrain into glass.\r\nAdd lemon twist peel.",
        "image": "https://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg",
        "otherImage": null,
        "ingredients": [
            "Ice",
            "Vodka",
            "Peach nectar",
            "Peach schnapps",
            "Lemon peel"
        ],
        "measurements": [
            "8 cubes",
            "3 oz ",
            "1.5 oz ",
            "1.5 oz ",
            "1 "
        ]
    },
    {
        "cockTailId": "16178",
        "name": "Jitterbug",
        "tags": [],
        "instructions": "Wet glass, dip rim in sugar. Then add Ice. Then add everything else. It's that simple!",
        "image": "https://www.thecocktaildb.com/images/media/drink/wwqvrq1441245318.jpg",
        "otherImage": null,
        "ingredients": [
            "Gin",
            "Vodka",
            "Grenadine",
            "Lime juice",
            "Sugar",
            "Sugar syrup",
            "Soda water"
        ],
        "measurements": [
            "2 jiggers ",
            "1 jigger ",
            "3 dashes ",
            "1 shot ",
            "Around rim put 1 pinch ",
            "3 dashes ",
            "Fill to top with "
        ]
    },
    {
        "cockTailId": "16196",
        "name": "Moranguito",
        "tags": [],
        "instructions": "first you put rhe absinthe, then put tequila, then put the Granadine syrup.",
        "image": "https://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg",
        "otherImage": null,
        "ingredients": [
            "Absinthe",
            "Tequila",
            "Grenadine"
        ],
        "measurements": [
            "2/5 ",
            "2/5 ",
            "1/5 "
        ]
    },
    {
        "cockTailId": "16250",
        "name": "Rum Runner",
        "tags": [],
        "instructions": "Mix all ingredients in glass & add ice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/vqws6t1504888857.jpg",
        "otherImage": null,
        "ingredients": [
            "Malibu rum",
            "Blackberry brandy",
            "Orange juice",
            "Pineapple juice",
            "Cranberry juice"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz ",
            "3-4 oz ",
            "3-4 oz ",
            "3-4 oz "
        ]
    },
    {
        "cockTailId": "16262",
        "name": "H.D.",
        "tags": [],
        "instructions": "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
        "image": "https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg",
        "otherImage": null,
        "ingredients": [
            "Whisky",
            "Baileys irish cream",
            "Coffee"
        ],
        "measurements": [
            "4 cl ",
            "8 cl "
        ]
    },
    {
        "cockTailId": "16271",
        "name": "The Evil Blue Thing",
        "tags": [],
        "instructions": "Pour ingredients into glass, and drop in a blue whale! The blue whale isn't really necessary, but it makes the drink more \"fun\".",
        "image": "https://www.thecocktaildb.com/images/media/drink/ojnpz71504793059.jpg",
        "otherImage": null,
        "ingredients": [
            "Creme de Cacao",
            "Blue Curacao",
            "Light rum"
        ],
        "measurements": [
            "1 1/2 oz ",
            "1 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "16273",
        "name": "Shark Attack",
        "tags": [],
        "instructions": "Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!",
        "image": "https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg",
        "otherImage": null,
        "ingredients": [
            "Lemonade",
            "Water",
            "Vodka"
        ],
        "measurements": [
            "1 can ",
            "3 cans ",
            "1 1/2 cup "
        ]
    },
    {
        "cockTailId": "16275",
        "name": "Jack's Vanilla Coke",
        "tags": [],
        "instructions": "After pouring in your ingredients, and adding 3-5 ice cubes, according to taste. Stir the drink with a stirrer to get the Vanilla off the bottom.",
        "image": "https://www.thecocktaildb.com/images/media/drink/kjnt7z1504793319.jpg",
        "otherImage": null,
        "ingredients": [
            "Ice",
            "Tennessee whiskey",
            "Vanilla extract",
            "Coca-Cola"
        ],
        "measurements": [
            "4-5 ",
            "2 oz ",
            "1 tsp ",
            "10-12 oz "
        ]
    },
    {
        "cockTailId": "16289",
        "name": "Apple Grande",
        "tags": [],
        "instructions": "Chill both ingredients!! Mix in a tumbler and enjoy!",
        "image": "https://www.thecocktaildb.com/images/media/drink/wqrptx1472668622.jpg",
        "otherImage": null,
        "ingredients": [
            "Tequila",
            "Apple cider"
        ],
        "measurements": [
            "3 oz ",
            "12 oz "
        ]
    },
    {
        "cockTailId": "16295",
        "name": "Bleeding Surgeon",
        "tags": [],
        "instructions": "Pour Shot of Rum over slice of orange. Fill the remaining space in glass half way full of surge or similar drink. Finish off glass with cranberry juice. Be carefull, warm surge may foam over the glass.",
        "image": "https://www.thecocktaildb.com/images/media/drink/usuvvr1472719118.jpg",
        "otherImage": null,
        "ingredients": [
            "Dark rum",
            "Orange",
            "Surge",
            "Cranberry juice"
        ],
        "measurements": [
            "1 shot ",
            "1 slice ",
            "1/2 glass ",
            "1/2 glass "
        ]
    },
    {
        "cockTailId": "16311",
        "name": "Applejack",
        "tags": [],
        "instructions": "Add all ingredients into mixing glass, chill and strain into cocktail glass",
        "image": "https://www.thecocktaildb.com/images/media/drink/sutyqp1479209062.jpg",
        "otherImage": null,
        "ingredients": [
            "Jack Daniels",
            "Midori melon liqueur",
            "Sour mix"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz ",
            "2 oz "
        ]
    },
    {
        "cockTailId": "16333",
        "name": "Adam Bomb",
        "tags": [],
        "instructions": "Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruite juice depending on personal prefference then add the Rum, Vodka, Tequila, and triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
        "otherImage": null,
        "ingredients": [
            "Rum",
            "Vodka",
            "Tequila",
            "Triple sec",
            "Fruit",
            "Ice",
            "Salt",
            "Fruit juice"
        ],
        "measurements": [
            "1 part ",
            "1 part ",
            "1 part ",
            "1/2 part ",
            "1-3 pint "
        ]
    },
    {
        "cockTailId": "16354",
        "name": "Arizona Antifreeze",
        "tags": [],
        "instructions": "Pour all ingredients into shot glass and slam !!!!",
        "image": "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Midori melon liqueur",
            "Sweet and sour"
        ],
        "measurements": [
            "1/3 oz ",
            "1/3 oz ",
            "1/3 oz "
        ]
    },
    {
        "cockTailId": "16403",
        "name": "Black and Brown",
        "tags": [],
        "instructions": "CAREFULLY to avoid explosive head formation: Pour Beer glass half full of favorite rootbeer and top off with Guinness.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wwuvxv1472668899.jpg",
        "otherImage": null,
        "ingredients": [
            "Guinness stout",
            "Root beer"
        ],
        "measurements": [
            "1/2 ",
            "1/2 "
        ]
    },
    {
        "cockTailId": "16405",
        "name": "A Piece of Ass",
        "tags": [],
        "instructions": "Put ice in glass. Pour in shots. Fill with Sour Mix.",
        "image": "https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg",
        "otherImage": null,
        "ingredients": [
            "Amaretto",
            "Southern Comfort",
            "Ice",
            "Sour mix"
        ],
        "measurements": [
            "1 shot ",
            "1 shot ",
            "cubes"
        ]
    },
    {
        "cockTailId": "16419",
        "name": "Avalanche",
        "tags": [],
        "instructions": "Mix in highball glass over ice, shake well.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uppqty1472720165.jpg",
        "otherImage": null,
        "ingredients": [
            "Crown Royal",
            "Kahlua",
            "Cream"
        ],
        "measurements": [
            "1 shot ",
            "1 shot ",
            "Fill with "
        ]
    },
    {
        "cockTailId": "16447",
        "name": "Brandon and Will's Coke Float",
        "tags": [],
        "instructions": "Scoop two large scoops of vanilla ice-cream into frosted beer mug. Next, add 2 ounces Maker's Mark. Then, pour in coke. Gently stir and enjoy.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xspxyr1472719185.jpg",
        "otherImage": null,
        "ingredients": [
            "Vanilla ice-cream",
            "Coca-Cola",
            "Bourbon"
        ],
        "measurements": [
            "2 scoops ",
            "1 can ",
            "2 oz "
        ]
    },
    {
        "cockTailId": "16485",
        "name": "Flaming Lamborghini",
        "tags": [],
        "instructions": "Pour the Sambuca and Kahlua into the Cocktail Glass and give the drinker a straw. Pour the Baileys and Blue Curacao into two sepsrate shot glasses either side of the cocktail glass. Set light the concotion in the cocktail glass and start to drink through the straw (this drink should be drunk in one) , as the bottom of the glass is reached put out the fire by pouring the Baileys and Blue Curacao into the cocktail glass and keep drinking till it's all gone!!",
        "image": "https://www.thecocktaildb.com/images/media/drink/yywpss1461866587.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Sambuca",
            "Blue Curacao",
            "Baileys irish cream"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "16942",
        "name": "Zipperhead",
        "tags": [],
        "instructions": "Fill glass with rocks, add straw before putting in liquor. Then add the ingredients in order, trying to keep layered as much as possible (i.e. Chambord on bottom, then Vodka, Then soda on top).",
        "image": "https://www.thecocktaildb.com/images/media/drink/r2qzhu1485620235.jpg",
        "otherImage": null,
        "ingredients": [
            "Chambord raspberry liqueur",
            "Vodka",
            "Soda water"
        ],
        "measurements": [
            "1 shot ",
            "1 shot ",
            "Fill with "
        ]
    },
    {
        "cockTailId": "16943",
        "name": "A Gilligan's Island",
        "tags": [],
        "instructions": "Shaken, not stirred!",
        "image": "https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Peach schnapps",
            "Orange juice",
            "Cranberry juice"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "3 oz ",
            "3 oz "
        ]
    },
    {
        "cockTailId": "16951",
        "name": "Kioki Coffee",
        "tags": [],
        "instructions": "Stir. Add whipped cream to the top.",
        "image": "https://www.thecocktaildb.com/images/media/drink/uppqty1441247374.jpg",
        "otherImage": null,
        "ingredients": [
            "Kahlua",
            "Brandy",
            "Coffee"
        ],
        "measurements": [
            "1 oz ",
            "1/2 oz "
        ]
    },
    {
        "cockTailId": "16958",
        "name": "Apple Pie with A Crust",
        "tags": [],
        "instructions": "Just mix the two liquids and sprinkle in the cinnamon. Serve either cold or heated.",
        "image": "https://www.thecocktaildb.com/images/media/drink/qspqxt1472720078.jpg",
        "otherImage": null,
        "ingredients": [
            "Apple juice",
            "Malibu rum",
            "Cinnamon"
        ],
        "measurements": [
            "3 parts ",
            "1 part ",
            "3 dashes "
        ]
    },
    {
        "cockTailId": "16963",
        "name": "Zorbatini",
        "tags": [],
        "instructions": "Prepare like a Martini. Garnish with a green olive.",
        "image": "https://www.thecocktaildb.com/images/media/drink/wtkqgb1485621155.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Ouzo"
        ],
        "measurements": [
            "1 1/4 oz Stoli ",
            "1/4 oz "
        ]
    },
    {
        "cockTailId": "16967",
        "name": "Vodka Fizz",
        "tags": [],
        "instructions": "Blend all ingredients, save nutmeg. Pour into large white wine glass and sprinkle nutmeg on top.",
        "image": "https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Half-and-half",
            "Limeade",
            "Ice",
            "Nutmeg"
        ],
        "measurements": [
            "2 oz ",
            "2 oz ",
            "2 oz "
        ]
    },
    {
        "cockTailId": "16984",
        "name": "Radioactive Long Island Iced Tea",
        "tags": [],
        "instructions": "Pour all ingredients over ice in a very tall glass. Sip cautiously.",
        "image": "https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg",
        "otherImage": null,
        "ingredients": [
            "Rum",
            "Vodka",
            "Tequila",
            "Gin",
            "Triple sec",
            "Chambord raspberry liqueur",
            "Midori melon liqueur",
            "Malibu rum"
        ],
        "measurements": [
            "1 oz ",
            "1 oz ",
            "1 oz ",
            "1 oz ",
            "1 oz ",
            "1 oz ",
            "1 oz ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "16985",
        "name": "Shot-gun",
        "tags": [],
        "instructions": "Pour one part Jack Daneils and one part Jim Beam into shot glass then float Wild Turkey on top.",
        "image": "https://www.thecocktaildb.com/images/media/drink/2j1m881503563583.jpg",
        "otherImage": null,
        "ingredients": [
            "Jim Beam",
            "Jack Daniels",
            "Wild Turkey"
        ],
        "measurements": [
            "1 part ",
            "1 part ",
            "1 oz "
        ]
    },
    {
        "cockTailId": "16986",
        "name": "Bible Belt",
        "tags": [],
        "instructions": "Mix all ingredients, and pour over ice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/6bec6v1503563675.jpg",
        "otherImage": null,
        "ingredients": [
            "Southern Comfort",
            "Triple sec",
            "Lime",
            "Sour mix"
        ],
        "measurements": [
            "2 oz ",
            "1/2 oz ",
            "2 wedges ",
            "2 oz "
        ]
    },
    {
        "cockTailId": "16987",
        "name": "Irish Curdling Cow",
        "tags": [],
        "instructions": "Pour Irish Cream, Vodka, and Bourbon in a glass. Add some ice and mix in the orange juice.",
        "image": "https://www.thecocktaildb.com/images/media/drink/yrhutv1503563730.jpg",
        "otherImage": null,
        "ingredients": [
            "Baileys irish cream",
            "Bourbon",
            "Vodka",
            "Orange juice"
        ],
        "measurements": [
            "3/4 oz ",
            "3/4 oz ",
            "3/4 oz ",
            "2-3 oz "
        ]
    },
    {
        "cockTailId": "16990",
        "name": "Sweet Tooth",
        "tags": [],
        "instructions": "Put 2 shots Godiva Liquour into a glass, add as much or as little milk as you would like.",
        "image": "https://www.thecocktaildb.com/images/media/drink/j6rq6h1503563821.jpg",
        "otherImage": null,
        "ingredients": [
            "Godiva liqueur",
            "Milk"
        ],
        "measurements": [
            "2 shots "
        ]
    },
    {
        "cockTailId": "16991",
        "name": "Downshift",
        "tags": [],
        "instructions": "Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional.",
        "image": "https://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg",
        "otherImage": null,
        "ingredients": [
            "Fruit punch",
            "Sprite",
            "Tequila",
            "151 proof rum"
        ],
        "measurements": [
            "2 part ",
            "1 part ",
            "2 shots ",
            "Float Bacardi "
        ]
    },
    {
        "cockTailId": "16992",
        "name": "Pink Penocha",
        "tags": [],
        "instructions": "mix all ingredients into bowl keep iced stir frequently",
        "image": "https://www.thecocktaildb.com/images/media/drink/6vigjx1503564007.jpg",
        "otherImage": null,
        "ingredients": [
            "Everclear",
            "Vodka",
            "Peach schnapps",
            "Orange juice",
            "Cranberry juice"
        ],
        "measurements": [
            "750 ml ",
            "1750 ml ",
            "1750 ml ",
            "1 gal ",
            "1 gal "
        ]
    },
    {
        "cockTailId": "16995",
        "name": "Orange Whip",
        "tags": [],
        "instructions": "Pour ingredients over ice and stir.",
        "image": "https://www.thecocktaildb.com/images/media/drink/ttyrxr1454514759.jpg",
        "otherImage": null,
        "ingredients": [
            "Orange juice",
            "Rum",
            "Vodka",
            "Cream",
            "Ice"
        ],
        "measurements": [
            "4 oz ",
            "1 oz ",
            "1 oz ",
            "1 package ",
            "Over "
        ]
    },
    {
        "cockTailId": "16998",
        "name": "Bruised Heart",
        "tags": [],
        "instructions": "Pour all ingredients in a mixing tin over ice, stir, and strain into shot glass",
        "image": "https://www.thecocktaildb.com/images/media/drink/7if5kq1503564209.jpg",
        "otherImage": null,
        "ingredients": [
            "Vodka",
            "Chambord raspberry liqueur",
            "Peachtree schnapps",
            "Cranberry juice"
        ],
        "measurements": [
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz ",
            "1/2 oz "
        ]
    },

]



Drink.insertMany(drinks).then(response => console.log(`inserted ${response.length} drinks`))