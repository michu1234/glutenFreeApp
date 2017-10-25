<template>
  <v-app id="inspire">
    <v-navigation-drawer persistent v-model="drawerRight" right clipped enable-resize-watcher app>
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dodaj nowy produkt</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="pink darken-3" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <div class="logo__box">
          <img class="logo" src="../src/assets/food-logo.png">
          <p>
            Gluten Free
            <br/>
            <small>
              <span class="text--red">for...</span>
            </small>
          </p>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer persistent v-model="drawer" enable-resize-watcher app>
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dodaj nowy przepis</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </v-navigation-drawer>
    <main>
      <v-navigation-drawer temporary v-model="left" fixed>

<!-- recipe -->

        <v-container>
          <form>
            <v-text-field
              label="Przepis na..."
              v-model="recipe.name"
              :counter="10"
              required
            ></v-text-field>
            <v-text-field
              label="Składniki"
              v-model="recipe.ingridients"
              required
            ></v-text-field>
             <v-layout>
                  <v-text-field
                    name="input-7-1"
                    label="Sposób wykonania"
                    v-model="recipe.directions"
                    :counter="100"
                    multi-line
                  ></v-text-field>
              </v-layout>
            <v-select
              label="Kategoria"
              v-model="recipe.select"
              :items="recipe.items"
              required
            ></v-select>
            <v-btn @click="submitRecipe">Dodaj</v-btn>
            <v-btn @click="clearRecipe">Wyczyść</v-btn>
          </form>
        </v-container>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center row wrap>
           
    




<ul>
  <li v-for="(r, index) in displayRecipe" :key="index">
    <span class="display-3"> {{r.name}}</span> || <span class="title">{{r.select}}</span>
     <v-flex xs6>
        <v-card light color="grey lighten-4">
          <v-card-text class="px-2"><img :src="photoUrl" alt=""></v-card-text>
        </v-card>
      </v-flex>
     
     
     
     
       <v-flex xs6>
        <v-card light color="grey lighten-4">
          <v-card-text class="px-2">
            {{r.ingridients}}
          </v-card-text>
        </v-card>
      </v-flex>
    
     <v-flex xs12>
        <v-card light color="grey lighten-4">
          <v-card-text class="px-2">
         {{r.directions}}
          </v-card-text>
        </v-card>
      </v-flex>
    
    
    
    
    
    
    
    
</li>
</ul>




          </v-layout>
        </v-container>
      </v-content>
      <v-navigation-drawer right temporary v-model="right" fixed>

<!-- PRODUKTY -->

        <v-container>
        <form>
          <v-text-field
            label="Nazwa produktu"
            v-model="product.name"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            label="Kcal w 100g"
            v-model="product.kcal"
            required
          ></v-text-field>
          <v-select
            label="Kategoria"
            v-model="product.select"
            :items="product.items"
            required
          ></v-select>
          <v-btn @click="submitProduct">Dodaj</v-btn>
          <v-btn @click="clearProduct">Wyczyść</v-btn>
        </form>
        </v-container>
      </v-navigation-drawer>
    </main>
    <v-footer color="pink darken-3" class="white--text" app>
      <span>
        <small>&copy; Copyright 2017, Dawid Nawrocki</small>
      </span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    drawer: true,
    drawerRight: true,
    right: null,
    left: null,
    photoUrl: "",
    product: {
      name: "",
      kcal: "",
      select: "",
      items: [
        "Mięso i ryby",
        "Nabiał i jaja",
        "Owoce i warzywa",
        "Pieczywo",
        "Słodycze",
        "Mrożonki",
        "Alkohol"
      ]
    },
    recipe: {
      name: "",
      ingridients: [],
      directions: "",
      select: "",
      items: ["Śniadanie", "Obiad", "Kolacja", "Deser", "Przekąska"]
    },
    displayProduct: [
      {
        name: "Pomidor",
        kcal: "22",
        select: "Owoce i warzywa"
      }
    ],
    displayRecipe: [
      {
        name: "Pomidorowa",
        ingridients: "pomidory, woda, przyprawy, bulion",
        directions: "Dokładnie umyj swoje pomidory...",
        select: "Obiad"
      }
    ]
  }),
  methods: {
    submitRecipe() {
      this.displayRecipe.push({
        name: this.recipe.name,
        directions: this.recipe.directions,
        ingridients: this.recipe.ingridients,
        select: this.recipe.select
      });
      this.getPhoto();
      this.recipe.name = "";
      this.recipe.ingridients = "";
      this.recipe.directions = "";
      this.recipe.select = "";
    },
    clearRecipe() {
      this.recipe.name = "";
      this.recipe.ingridients = "";
      this.recipe.directions = "";
      this.recipe.select = "";
    },
    submitProduct() {
      this.displayProduct.push({
        name: this.product.name,
        directions: this.product.kcal,
        select: this.product.select
      });
      this.product.name = "";
      this.product.kcal = "";
      this.product.select = "";
    },
    clearProduct() {
      this.product.name = "";
      this.product.kcal = "";
      this.product.select = "";
    },
    getPhoto() {
      fetch(`https://pixabay.com/api/?key=6818598-da2281dcdfb680148ef22e7a5&q=${this.recipe.name}&image_type=illustration&min_width=200`).then(function(response) { 
	// Convert to JSON
  return response.json();}).then(data =>{
    this.photoUrl = data.hits[0].webformatURL});
}
  },
  props: {
    source: String
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Chewy");

.logo {
  width: 100px;
  vertical-align: bottom;
  animation: logo_animation 8s 5s infinite;
}

@keyframes logo_animation {
  0% {
    filter: saturate(0);
  }
  78% {
    filter: saturate(0);
  }
  79% {
    filter: saturate(100%);
    filter: drop-shadow(
      0 0 10px rgba(255, 255, 255, 1),
      0 0 20px rgba(255, 255, 255, 1),
      0 0 30px rgba(255, 255, 255, 1),
      0 0 40px #ff00de,
      0 0 70px #ff00de,
      0 0 80px #ff00de,
      0 0 100px #ff00de
    );
    filter: blur(0.4px);
  }
  80% {
    filter: saturate(0);
  }
  91% {
    filter: saturate(0);
  }
  92% {
    filter: saturate(100%);
    filter: drop-shadow(
      0 0 10px rgba(255, 255, 255, 1),
      0 0 20px rgba(255, 255, 255, 1),
      0 0 30px rgba(255, 255, 255, 1),
      0 0 40px #ff00de,
      0 0 70px #ff00de,
      0 0 80px #ff00de,
      0 0 100px #ff00de
    );
    filter: blur(0.4px);
  }
  93% {
    filter: saturate(0);
  }
  94% {
    filter: saturate(100%);
    filter: drop-shadow(
      0 0 10px rgba(255, 255, 255, 1),
      0 0 20px rgba(255, 255, 255, 1),
      0 0 30px rgba(255, 255, 255, 1),
      0 0 40px #ff00de,
      0 0 70px #ff00de,
      0 0 80px #ff00de,
      0 0 100px #ff00de
    );
    filter: blur(0.4px);
  }
  95% {
    filter: saturate(0);
  }
  100% {
    filter: saturate(0);
  }
}

.logo__box {
  display: inline-block;
  line-height: 16px;
  font-family: "Chewy", cursive;

  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7);
}

.logo:hover {
  filter: saturate(100%);
  transition: all 0.25s;
}

img {
  max-width: 200px;
}

p {
  display: inline-block;
}

.text--red {
  color: gold;
}
</style>

