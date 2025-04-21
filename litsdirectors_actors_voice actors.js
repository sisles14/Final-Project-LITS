const people = [
    // This is the array of objects containing movie, director, actors, voice actors, and images
    {
        movie: "Annabelle (2014)",
        director: ["John R. Leonetti"],
        actors: ["Ward Horton, Annabelle Wallis, Alfre Woodard, Tony Amendola"],
        voiceactors: [],
        images: ["annabelle_images/johnr.leonetti.jpg"],
        actorImages: [
            "annabelle_images/wardhorton.jpg",
            "annabelle_images/annabellewallis.jpg",
            "annabelle_images/alfrewoodard.jpg",
            "annabelle_images/tonyamendola.jpg",
        ]
    },

    {
        movie: "Barbie (2023)",
        director: ["Greta Gerwig"],
        actors: ["Margot Robbie, Ryan Gosling, Kate McKinnon, America Ferrera, Ariana Greenblatt"],
        voiceactors: [],
        images: ["barbie_images/gretagerwig.jpg"],
        actorImages: [
            "barbie_images/margotrobbie.jpg",
            "barbie_images/ryangosling.jpg",
            "barbie_images/katemckinnon.jpg",
            "barbie_images/americaferrera.jpg",
            "barbie_images/arianagreenblatt.jpg",
        ]
    },

    {
        movie: "Bite (2015)",
        director: ["Chad Archibald"],
        actors: ["Elma Begovic, Annette Wozniak, Denise Yuen, Jordan Gray, Lawrene Denkers"],
        voiceactors: [],
        images: ["bite_images/chadarchibald.jpg"],
        actorImages: [
            "bite_images/elmabegovic.jpg",
            "bite_images/annettewozniak.jpg",
            "bite_images/deniseyuen.jpg",
            "bite_images/jordangray.jpg",
            "bite_images/lawrenedenkers.jpg",
        ]
    },

    {
        movie: "Black Panther(2018)",
        director: ["Ryan Coogler"],
        actors: ["Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Letitia Wright, Angela Bassett, Martin Freeman, Winston Duke"],
        voiceactors: [],
        images: ["blackpanther_images/ryancoogler.jpg"],
        actorImages: [
            "blackpanther_images/chadwickboseman.jpg",
            "blackpanther_images/michaelbjordan.jpg",
            "blackpanther_images/lupitanyongo.jpg",
            "blackpanther_images/danaigurira.jpg",
            "blackpanther_images/letitiawright.jpg",
            "blackpanther_images/angelabassett.jpg",
            "blackpanther_images/martinfreeman.jpg",
            "blackpanther_images/winstonduke.jpg"
        ]
    },

    {
        movie: "Brave(2012)",
        director: ["Mark Andrews, Brenda Chapman"],
        actors: [],
        voiceactors: ["Kelly Macdonald, Billy Connolly, Emma Thompson, Julie Walters"],
        images: ["brave_images/markandrews.jpg", "brave_images/brendachapman.jpg"],
        voiceImages: [
            "brave_images/kellymacdonald.jpg",
            "brave_images/billyconnolly.jpg",
            "brave_images/emmathompson.jpg",
            "brave_images/juliewalters.jpg"
        ]
    },

    {
        movie: "Bride of Chucky(1998)",
        director: ["Ronny Yu"],
        actors: ["Jennifer Tilly, Katherine Heigl, Nick Stabile, Alexis Arquette, Gordon Michael Woolvett"],
        voiceactors: ["Brad Dourif"],
        images: ["brideofchucky_images/ronnyyu.jpg"],
        actorImages: [
            "brideofchucky_images/jennifertilly.jpg",
            "brideofchucky_images/katherineheigl.jpg",
            "brideofchucky_images/nickstabile.jpg",
            "brideofchucky_images/alexisarquette.jpg",
            "brideofchucky_images/gordonmichaelwoolvett.jpg"
        ],
        voiceImages: [
            "brideofchucky_images/braddourif.jpg"
        ]
    },

    {
        movie: "Coco (2017)",
        director: ["Lee Unkrich, Adrian Molina"],
        actors: [],
        voiceactors: ["Anthony Gonzalez, Gael García Bernal, Benjamin Bratt, Alanna Ubach, Renee Victor, Alfonso Arau, Herbert Siguenza, Selene Luna, Dyana Ortelli, Luis Valdez"],
        images: ["coco_images/leeunkrich.jpg","coco_images/adrianmolina.jpg"],
        voiceImages: [
            "coco_images/anthonygonzalez.jpg",
            "coco_images/gaelgarciabernal.jpg",
            "coco_images/benjaminbratt.jpg",
            "coco_images/alannaubach.jpg",
            "coco_images/reneevictor.jpg",
            "coco_images/alfonsoarau.jpg",
            "coco_images/herbertsiguenza.jpg",
            "coco_images/seleneluna.jpg",
            "coco_images/dyanaortelli.jpg",
            "coco_images/luisvaldez.jpg"
        ],
    },

    {
        movie: "Coraline (2009)",
        director: ["Henry Selick"],
        actors: [],
        voiceactors: ["Dakota Fanning, Teri Hatcher, John Hodgman, Robert Bailey Jr., Jennifer Saunders, Dawn French, Keith David, Ian McShane"],
        images: ["coraline_images/henryselick.jpg"],
        voiceImages: [
            "coraline_images/dakotafanning.jpg",
            "coraline_images/terihatcher.jpg",
            "coraline_images/johnhodgman.jpg",
            "coraline_images/robertbaileyjr.jpg",
            "coraline_images/jennifersaunders.jpg",
            "coraline_images/dawnfrench.jpg",
            "coraline_images/keithdavid.jpg",
            "coraline_images/ianmcshane.jpg"
        ]
    },

    {
        movie: "Demon Slayer: Kimetsu no Yaiba Mugen Train (2020)",
        director: ["Haruo Sotozaki"],
        actors: [],
        voiceactors: ["Natsuki Hanae, Zach Aguilar, Akari Kito, Abby Trott, Hiro Shimono, Aleks Le, Yoshitsugu Matsuoka, Bryce Papenbrook, Satoshi Hino, Mark Whitten, Daisuke Hirakawa, Landon McDonald, Akira Ishida, Lucien Dodge"],
        images: ["demonslayermugentrain_images/haruosotozaki.jpg"],
        voiceImages: [
            "demonslayermugentrain_images/natsukihanae.jpg",
            "demonslayermugentrain_images/zachaguilar.jpg",
            "demonslayermugentrain_images/akarikito.jpg",
            "demonslayermugentrain_images/abbytrott.jpg",
            "demonslayermugentrain_images/hiroshimono.jpg",
            "demonslayermugentrain_images/aleksle.jpg",
            "demonslayermugentrain_images/yoshitsugumatsuoka.jpg",
            "demonslayermugentrain_images/brycepapenbrook.jpg",
            "demonslayermugentrain_images/satoshihino.jpg",
            "demonslayermugentrain_images/markwhitten.jpg",
            "demonslayermugentrain_images/daisukehirakawa.jpg",
            "demonslayermugentrain_images/landonmcdonald.jpg",
            "demonslayermugentrain_images/akiraishida.jpg",
            "demonslayermugentrain_images/luciendodge.jpg"

        ],
    },

    {
        movie: "Elemental (2023)",
        director: ["Peter Sohn"],
        actors: [],
        voiceactors: ["Leah Lewis, Mamoudou Athie, Ronnie Del Carmen, Shila Ommi, Wendi McLendon-Covey, Catherine O'Hara"],
        images: ["elemental_images/petersohn.jpg"],
        voiceImages: [
            "elemental_images/leahlewis.jpg",
            "elemental_images/mamoudouathie.jpg",
            "elemental_images/ronniedelcarmen.jpg",
            "elemental_images/shilaommi.jpg",
            "elemental_images/wendimclendoncovey.jpg",
            "elemental_images/catherineohara.jpg"
        ]
    },

    {
        movie: "Fractured (2019)",
        director: ["Brad Anderson"],
        actors: ["Sam Worthington, Lily Rabe, Lucy Capri, Adjoa Andoh, Stephen Tobolowsky, Lauren Cochrane, Shane Dean"],
        voiceactors: [],
        images: ["fractured_images/bradanderson.jpg"],
        actorImages: [
            "fractured_images/samworthington.jpg",
            "fractured_images/lilyrabe.jpg",
            "fractured_images/lucycapri.jpg",
            "fractured_images/adjoaandoh.jpg",
            "fractured_images/stephentobolowsky.jpg",
            "fractured_images/laurencochrane.jpg",
            "fractured_images/shanedean.jpg"
        ]
    },

    {
        movie: "Frozen (2013)",
        director: ["Chris Buck, Jennifer Lee"],
        actors: [],
        voiceactors: ["Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad, Santino Fontana"],
        images: ["frozenfrozen2_images/chrisbuck.jpg","frozenfrozen2_images/jenniferlee.jpg"],
        voiceImages: [
            "frozenfrozen2_images/kristenbell.jpg",
            "frozenfrozen2_images/idinamenzel.jpg",
            "frozenfrozen2_images/jonathangroff.jpg",
            "frozenfrozen2_images/joshgad.jpg",
            "frozenfrozen2_images/santinofontana.jpg"
        ]
    },

    {
        movie: "Frozen II (2019)",
        director: ["Chris Buck, Jennifer Lee"],
        actors: [],
        voiceactors: ["Idina Menzel, Kristen Bell, Jonathan Groff, Josh Gad, Sterling K. Brown, Evan Rachel Wood, Martha Plimpton"],
        images: ["frozenfrozen2_images/chrisbuck.jpg","frozenfrozen2_images/jenniferlee.jpg"],
        voiceImages: [
            "frozenfrozen2_images/idinamenzel.jpg",
            "frozenfrozen2_images/kristenbell.jpg",
            "frozenfrozen2_images/jonathangroff.jpg",
            "frozenfrozen2_images/joshgad.jpg",
            "frozenfrozen2_images/sterlingkbrown.jpg",
            "frozenfrozen2_images/evanrachelwood.jpg",
            "frozenfrozen2_images/marthaplimpton.jpg",
        ]
    },

    {
        movie: "Gerald's Game (2017)",
        director: ["Mike Flanagan"],
        actors: ["Carla Gugino, Bruce Greenwood, Chiara Aurelia, Carel Struycken, Henry Thomas, Kate Siegel"],
        voiceactors: [],
        images: ["geraldsgame_images/mikeflanagan.jpg"],
        actorImages: [
            "geraldsgame_images/carlagugino.jpg",
            "geraldsgame_images/brucegreenwood.jpg",
            "geraldsgame_images/chiaraaurelia.jpg",
            "geraldsgame_images/carelstruycken.jpg",
            "geraldsgame_images/henrythomas.jpg",
            "geraldsgame_images/katesiegel.jpg"
        ]
    },

    {
        movie: "Home (2015)",
        director: ["Tim Johnson"],
        actors: [],
        voiceactors: ["Jim Parsons, Rihanna, Steve Martin, Jennifer Lopez, Matt Jones, Brian Stepanek"],
        images: ["home_images/timjohnson.jpg"],
        voiceImages: [
            "home_images/jimparsons.jpg",
            "home_images/rihanna.jpg",
            "home_images/stevemartin.jpg",
            "home_images/jenniferlopez.jpg",
            "home_images/mattjones.jpg",
            "home_images/brianstepanek.jpg"
        ]
    },

    {
        movie: "I Care A Lot (2020)",
        director: ["J Blakeson"],
        actors: ["Rosamund Pike, Peter Dinklage, Eiza González, Dianne Wiest, Chris Messina, Alicia Witt, Damian Young"],
        voiceactors: [],
        images: ["icarealot_images/jblakeson.jpg"],
        actorImages: [
            "icarealot_images/rosamundpike.jpg",
            "icarealot_images/peterdinklage.jpg",
            "icarealot_images/eizagonzalez.jpg",
            "icarealot_images/diannewiest.jpg",
            "icarealot_images/chrismessina.jpg",
            "icarealot_images/aliciawitt.jpg",
            "icarealot_images/damianyoung.jpg"
        ]
    },

    {
        movie: "Miraculous Ladybug & Cat Noir, the Movie (2023)",
        director: ["Jeremy Zag"],
        actors: [],
        voiceactors: ["Cristina Valenzuela, Bryce Papenbrook, Carrie Keranen, Zeno Robinson, Mela Lee, Max Mittelman, Keith Silverstein, Paul St. Peter, Selah Victor, Cassandra Lee Morris"],
        images: ["miraculousladybugandcatnoirthemovie_images/jeremyzag.jpg"],
        voiceImages: [
            "miraculousladybugandcatnoirthemovie_images/cristinaveevalenzuela.jpg",
            "miraculousladybugandcatnoirthemovie_images/brycepapenbrook.jpg",
            "miraculousladybugandcatnoirthemovie_images/carriekeranen.jpg",
            "miraculousladybugandcatnoirthemovie_images/zenorobinson.jpg",
            "miraculousladybugandcatnoirthemovie_images/melalee.jpg",
            "miraculousladybugandcatnoirthemovie_images/maxmittelman.jpg",
            "miraculousladybugandcatnoirthemovie_images/keithsilverstein.jpg",
            "miraculousladybugandcatnoirthemovie_images/paulstpeter.jpg",
            "miraculousladybugandcatnoirthemovie_images/selahvictor.jpg",
            "miraculousladybugandcatnoirthemovie_images/cassandraleemorris.jpg"
        ]
    },

    {
        movie: "My Hero Academia: Heroes Rising (2019)",
        director: ["Kenji Nagasaki"],
        actors: [],
        voiceactors: ["Daiki Yamashita, Justin Briner, Nobuhiko Okamoto, Clifford Chapin, Yuka Terasaki, Maxey Whitehead, Tomoyo Kurosawa, Dani Chambers, Yoshio Inoue, Johnny Yong Bosch, Shunsuke Takeuchi, Greg Dulcie, Mio Imada, Lydia Mackay, Kōsuke Toriumi, Brendan Blaber"],
        images: ["myheroacademiaheroesrising_images/kenjinagasaki.jpg"],
        voiceImages: [
            "myheroacademiaheroesrising_images/daikiyamashita.jpg",
            "myheroacademiaheroesrising_images/justinbriner.jpg",
            "myheroacademiaheroesrising_images/nobuhikookamoto.jpg",
            "myheroacademiaheroesrising_images/cliffordchapin.jpg",
            "myheroacademiaheroesrising_images/yukaterasaki.jpg",
            "myheroacademiaheroesrising_images/maxeywhitehead.jpg",
            "myheroacademiaheroesrising_images/tomoyokurosawa.jpg",
            "myheroacademiaheroesrising_images/danichambers.jpg",
            "myheroacademiaheroesrising_images/yoshioinoue.jpg",
            "myheroacademiaheroesrising_images/johnnyyongbosch.jpg",
            "myheroacademiaheroesrising_images/shunsuketakeuchi.jpg",
            "myheroacademiaheroesrising_images/gregdulcie.jpg",
            "myheroacademiaheroesrising_images/mioimada.jpg",
            "myheroacademiaheroesrising_images/lydiamackay.jpg",
            "myheroacademiaheroesrising_images/kosuketoriumi.jpg",
            "myheroacademiaheroesrising_images/brendanblaber.jpg"
        ]
    },

    {
        movie: "My Little Pony: Equestria Girls - Legend of Everfree (2016)",
        director: ["Ishi Rudell"],
        actors: [],
        voiceactors: ["Tara Strong, Rebecca Shoichet, Ashleigh Ball, Andrea Libman, Tabitha St. Germain, Cathy Weseluck, Enid-Raye Adams, Brian Doe"],
        images: ["mlplegendofeverfreerainbowrocks_images/ishirudell.jpg"],
        voiceImages: [
            "mlplegendofeverfreerainbowrocks_images/tarastrong.jpg",
            "mlplegendofeverfreerainbowrocks_images/rebeccashoichet.jpg",
            "mlplegendofeverfreerainbowrocks_images/ashleighball.jpg",
            "mlplegendofeverfreerainbowrocks_images/andrealibman.jpg",
            "mlplegendofeverfreerainbowrocks_images/tabithast.germain.jpg",
            "mlplegendofeverfreerainbowrocks_images/cathyweseluck.jpg",
            "mlplegendofeverfreerainbowrocks_images/enidrayeadams.jpg",
            "mlplegendofeverfreerainbowrocks_images/briandoe.jpg"
        ]
    },

    {
        movie: "My Little Pony: Equestria Girls - Rainbow Rocks (2014)",
        director: ["Jayson Thiessen, Ishi Rudell"],
        actors: [],
        voiceactors: ["Tara Strong, Ashleigh Ball, Andrea Libman, Tabitha St. Germain, Cathy Weseluck, Rebecca Shoichet, Kazumi Evans, Marÿke Hendrikse, Diana Kaarina"],
        images: ["mlplegendofeverfreerainbowrocks_images/jaysonthiessen.jpg","mlplegendofeverfreerainbowrocks_images/ishirudell.jpg"],
        voiceImages: [
            "mlplegendofeverfreerainbowrocks_images/tarastrong.jpg",
            "mlplegendofeverfreerainbowrocks_images/ashleighball.jpg",
            "mlplegendofeverfreerainbowrocks_images/andrealibman.jpg",
            "mlplegendofeverfreerainbowrocks_images/tabithast.germain.jpg",
            "mlplegendofeverfreerainbowrocks_images/cathyweseluck.jpg",
            "mlplegendofeverfreerainbowrocks_images/rebeccashoichet.jpg",
            "mlplegendofeverfreerainbowrocks_images/kazumievans.jpg",
            "mlplegendofeverfreerainbowrocks_images/marykehendrikse.jpg",
            "mlplegendofeverfreerainbowrocks_images/dianakaarina.jpg"
        ]
    },

    {
        movie: "Plankton: The Movie (2025)",
        director: ["Dave Needham"],
        actors: [],
        voiceactors: ["Mr. Lawrence, Jill Talley, Tom Kenny, Carolyn Lawrence, Mary Jo Catlett, Lori Alan"],
        images: ["plantonthemovie_images/daveneedham.jpg"],
        voiceImages: [
            "plantonthemovie_images/mrlawrence.jpg",
            "plantonthemovie_images/jilltalley.jpg",
            "plantonthemovie_images/tomkenny.jpg",
            "plantonthemovie_images/carolynlawrence.jpg",
            "plantonthemovie_images/maryjocatlett.jpg",
            "plantonthemovie_images/lorialan.jpg"
        ]
    },

    {
        movie: "Puss in Boots: The Last Wish (2022)",
        director: ["Joel Crawford, Januel Mercado"],
        actors: [],
        voiceactors: ["Antonio Banderas, Salma Hayek, Harvey Guillén, John Mulaney, Wagner Moura"],
        images: ["pussinbootsthelastwish_images/joelcrawford.jpg","pussinbootsthelastwish_images/januelmercado.jpg"],
        voiceImages: [
            "pussinbootsthelastwish_images/antoniobanderas.jpg",
            "pussinbootsthelastwish_images/salmahayek.jpg",
            "pussinbootsthelastwish_images/harveyguillen.jpg",
            "pussinbootsthelastwish_images/johnmulaney.jpg",
            "pussinbootsthelastwish_images/wagnermoura.jpg"
        ]
    },

    {
        movie: "Secret of the Wings (2012)",
        director: ["Bobs Gannaway, Peggy Holmes"],
        actors: [],
        voiceactors: ["Mae Whitman, Lucy Hale, Lucy Liu, Raven-Symoné, Megan Hilty, Pamela Adlon, Angela Bartys, Timothy Dalton, Jeff Bennett, Matt Lanter"],
        images: ["secretofthewings_images/bobsgannaway.jpg","secretofthewings_images/peggyholmes.jpg"],
        voiceImages: [
            "secretofthewings_images/maewhitman.jpg",
            "secretofthewings_images/lucyhale.jpg",
            "secretofthewings_images/lucyliu.jpg",
            "secretofthewings_images/ravensymone.jpg",
            "secretofthewings_images/meganhilty.jpg",
            "secretofthewings_images/pamelaadlon.jpg",
            "secretofthewings_images/angelabartys.jpg",
            "secretofthewings_images/timothydalton.jpg",
            "secretofthewings_images/jeffbennett.jpg",
            "secretofthewings_images/mattlanter.jpg"
        ]
    },

    {
        movie: "Sing (2016)",
        director: ["Garth Jennings, Christophe Lourdelet"],
        actors: [],
        voiceactors: ["Matthew McConaughey, Reese Witherspoon, Seth MacFarlane, Scarlett Johansson, Taron Egerton, Tori Kelly, John C. Reilly, Jennifer Saunders, Garth Jennings, Nick Kroll"],
        images: ["sing_images/garthjennings.jpg","sing_images/0whoknows.jpg"],
        voiceImages: [
            "sing_images/matthewmcconaughey.jpg",
            "sing_images/reesewitherspoon.jpg",
            "sing_images/sethmacfarlane.jpg",
            "sing_images/scarlettjohansson.jpg",
            "sing_images/taronegerton.jpg",
            "sing_images/torikelly.jpg",
            "sing_images/johncreilly.jpg",
            "sing_images/jennifersaunders.jpg",
            "sing_images/garthjennings.jpg",
            "sing_images/nickkroll.jpg"
        ]
    },

    {
        movie: "Smile (2022)",
        director: ["Parker Finn"],
        actors: ["Sosie Bacon, Jessie T. Usher, Kyle Gallner, Robin Weigert, Caitlin Stasey"],
        voiceactors: [],
        images: ["smile_images/parkerfinn.jpg"],
        actorImages: [
            "smile_images/sosiebacon.jpg",
            "smile_images/jessietusher.jpg",
            "smile_images/kylegallner.jpg",
            "smile_images/robinweigert.jpg",
            "smile_images/caitlinstasey.jpg"
        ]
    },

    {
        movie: "Terrifier (2016)",
        director: ["Damien Leone"],
        actors: ["Jenna Kanell, Samantha Scaffidi, Catherine Corcoran, David Howard Thornton, Pooya Mohseni, Matt McAllister"],
        voiceactors: [],
        images: ["terrifier_images/damienleone.jpg"],
        actorImages: [
            "terrifier_images/jennakanell.jpg",
            "terrifier_images/samanthascaffidi.jpg",
            "terrifier_images/catherinecorcoran.jpg",
            "terrifier_images/davidhowardthornton.jpg",
            "terrifier_images/pooyamohseni.jpg",
            "terrifier_images/mattmcallister.jpg"
        ]
    },

    {
        movie: "The Conjuring (2013)",
        director: ["James Wan"],
        actors: ["Patrick Wilson, Vera Farmiga, Ron Livingston, Lili Taylor, Shanley Caswell, Hayley McFarland, Joey King, Mackenzie Foy, Kyla Deaver"],
        voiceactors: [],
        images: ["theconjuring_images/jameswan.jpg"],
        actorImages: [
            "theconjuring_images/patrickwilson.jpg",
            "theconjuring_images/verafarmiga.jpg",
            "theconjuring_images/ronlivingston.jpg",
            "theconjuring_images/lilitaylor.jpg",
            "theconjuring_images/shanleycaswell.jpg",
            "theconjuring_images/hayleymcfarland.jpg",
            "theconjuring_images/joeyking.jpg",
            "theconjuring_images/mackenziefoy.jpg",
            "theconjuring_images/kyladeaver.jpg"
        ]
    },

    {
        movie: "The Princess and the Frog (2009)",
        director: ["Ron Clements, John Musker"],
        actors: [],
        voiceactors: ["Anika Noni Rose, Bruno Campos, Keith David, Michael-Leon Wooley, Jennifer Cody, Jim Cummings, Peter Bartlett, Jenifer Lewis"],
        images: ["theprincessandthefrog_images/ronclements.jpg","theprincessandthefrog_images/johnmusker.jpg"],
        voiceImages: [
            "theprincessandthefrog_images/anikanonirose.jpg",
            "theprincessandthefrog_images/brunocampos.jpg",
            "theprincessandthefrog_images/keithdavid.jpg",
            "theprincessandthefrog_images/michaelleonwooley.jpg",
            "theprincessandthefrog_images/jennifercody.jpg",
            "theprincessandthefrog_images/jimcummings.jpg",
            "theprincessandthefrog_images/peterbartlett.jpg",
            "theprincessandthefrog_images/jeniferlewis.jpg"
        ]
    },

    {
        movie: "The Truman Show (1998)",
        director: ["Peter Weir"],
        actors: ["Jim Carrey, Laura Linney, Ed Harris, Noah Emmerich, Natascha McElhone"],
        voiceactors: [],
        images: ["thetrumanshow_images/peterweir.pg.jpg"],
        actorImages: [
            "thetrumanshow_images/jimcarrey.jpg",
            "thetrumanshow_images/lauralinney.jpg",
            "thetrumanshow_images/edharris.jpg",
            "thetrumanshow_images/noahemmerich.jpg",
            "thetrumanshow_images/nataschamcelhone.jpg"
        ]
    },

    {
        movie: "Train to Busan (2016)",
        director: ["Yeon Sang-ho"],
        actors: ["Gong Yoo, Kim Su-an, Jung Yu-mi, Ma Dong-seok"],
        voiceactors: [],
        images: ["traintobusan_images/yeonsangho.jpg"],
        actorImages: [
            "traintobusan_images/gongyoo.jpg",
            "traintobusan_images/kimsuan.jpg",
            "traintobusan_images/jungyumi.jpg",
            "traintobusan_images/madongseok.jpg"
        ]
    },

    {
        movie: "Truth or Dare (2017)",
        director: ["Nick Simon"],
        actors: ["Cassandra Scerbo, Brytni Sarpy, Mason Dye, Alexxis Lemire, Ricardo Hoyos, Luke Baines, Harvey Guillén, Christina Masterson"],
        voiceactors: [],
        images: ["truthordare_images/nicksimon.jpg"],
        actorImages: [
            "truthordare_images/cassandrascerbo.jpg",
            "truthordare_images/brytnisarpy.jpg",
            "truthordare_images/masondye.jpg",
            "truthordare_images/alexxislemire.jpg",
            "truthordare_images/ricardohoyos.jpg",
            "truthordare_images/lukebaines.jpg",
            "truthordare_images/harveyguillen.jpg",
            "truthordare_images/christinamasterson.jpg"
        ]
    },

    {
        movie: "Unlocked (2023)",
        director: ["Kim Tae-joon"],
        actors: ["Chun Woo-hee, Yim Si-wan, Kim Ye-won, Kim Hee-won"],
        voiceactors: [],
        images: ["unlocked_images/kimtaejoon.jpg"],
        actorImages: [
            "unlocked_images/chunwoohee.jpg",
            "unlocked_images/yimsiwan.jpg",
            "unlocked_images/kimyewon.jpg",
            "unlocked_images/kimheewon.jpg"
        ]
    },
];

if (sessionStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "litslogin.html";
}
// This function will render the people data into the HTML elements
function renderPeople() {
    const peopleGrid = document.getElementById("peopleGrid");
    peopleGrid.innerHTML = "";
  
    const directorMap = new Map();
    const actorMap = new Map();
    const vaMap = new Map();
  
    people.forEach(entry => {
      entry.director.forEach(dir => {
        dir.split(",").map(name => name.trim()).forEach(name => {
          if (!directorMap.has(name)) directorMap.set(name, []);
          directorMap.get(name).push(entry.movie);
        });
      });
  
      entry.actors.forEach(actorGroup => {
        actorGroup.split(",").map(name => name.trim()).forEach(name => {
          if (!actorMap.has(name)) actorMap.set(name, []);
          actorMap.get(name).push(entry.movie);
        });
      });
  
      entry.voiceactors.forEach(vaGroup => {
        vaGroup.split(",").map(name => name.trim()).forEach(name => {
          if (!vaMap.has(name)) vaMap.set(name, []);
          vaMap.get(name).push(entry.movie);
        });
      });
    });

    [...directorMap.entries()].sort().forEach(([name, movies]) => {
      let image = "";
      for (const p of people) {
        const allNames = p.director.flatMap(d => d.split(",").map(n => n.trim()));
        const index = allNames.indexOf(name);
        if (index !== -1 && p.images?.[index]) {
          image = p.images[index];
          break;
        }
      }
      peopleGrid.appendChild(createCard(name, movies, "Director", image));
    });
  
    [...actorMap.entries()].sort().forEach(([name, movies]) => {
      let image = "";
      for (const p of people) {
        const names = p.actors.join(",").split(",").map(n => n.trim());
        const index = names.indexOf(name);
        if (index !== -1 && p.actorImages?.[index]) {
          image = p.actorImages[index];
          break;
        }
      }
      peopleGrid.appendChild(createCard(name, movies, "Actor", image));
    });
  
    [...vaMap.entries()].sort().forEach(([name, movies]) => {
      let image = "";
      for (const p of people) {
        const names = p.voiceactors.join(",").split(",").map(n => n.trim());
        const index = names.indexOf(name);
        if (index !== -1 && p.voiceImages?.[index]) {
          image = p.voiceImages[index];
          break;
        }
      }
      peopleGrid.appendChild(createCard(name, movies, "Voice Actor", image));
    });
  }


// This function will filter the people based on the search term and selected role
function filterPeople() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".person-card");
  
    cards.forEach(card => {
      const name = card.getAttribute("data-name");
      const matchesSearch = name.includes(searchInput);
      card.style.display = matchesSearch ? "block" : "none";
    });
  }

  function sortPeople() {
    const sortValue = document.getElementById("sortFilter").value;
    const grid = document.getElementById("peopleGrid");
    const cards = Array.from(document.querySelectorAll(".person-card"));
  
    cards.sort((a, b) => {
      const nameA = a.getAttribute("data-name");
      const nameB = b.getAttribute("data-name");
      if (sortValue === "az") {
        return nameA.localeCompare(nameB);
      } else if (sortValue === "za") {
        return nameB.localeCompare(nameA);
      }
      return 0;
    });
  
    grid.innerHTML = "";
    cards.forEach(card => grid.appendChild(card));
  }


// Back to Top Button functionality
// This function will show the "Back to Top" button when the user scrolls down the page
// and scroll to the top when the button is clicked
document.addEventListener("DOMContentLoaded", () => {
    renderPeople();
    const backToTopBtn = document.getElementById("backToTop");
  
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });



// This function will create a person card element
// It takes the name, movies, type (Director, Actor, or Voice Actor), and image as parameters
function createCard(name, movies, type, image) {
    const div = document.createElement("div");
    div.className = "person-card";
    div.setAttribute("data-role", type);
    div.setAttribute("data-name", name.toLowerCase());
  
    const imgTag = image ? `<img src="${image}" class="person-image" alt="${name}">` : "";
    div.innerHTML = `
      ${imgTag}
      <h3>${name}</h3>
      <p><strong>${type}</strong></p>
      <p><strong>Movies:</strong> ${movies.join(", ")}</p>
    `;
  
    // 🆕 Redirect to lostinthescreen.html with movie query
    if (movies.length > 0) {
      div.addEventListener("click", () => {
        const movie = encodeURIComponent(movies[0]);
        window.location.href = `lostinthescreen.html?movie=${movie}`;
      });
    }
  
    return div;
  }