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

        <!-- PRODUCTS LIST -->

        <v-layout row>
          <v-flex xs12>
            <v-card>
              <v-toolbar color="grey lighten-2" light>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Produkty</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>store_mall_directory</v-icon>
                </v-btn>
              </v-toolbar>
              <v-list>
                <v-list-group v-for="item in productsList" :value="item.active" v-bind:key="item.category">
                  <v-list-tile slot="item" @click="">
                    <v-list-tile-action>
                      <v-icon>{{ item.action }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.category }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-icon>keyboard_arrow_down</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="">
                    <v-list-tile-content>
                      <div class="subItem">
                        <v-list-tile-title>
                          <v-icon class="caption">near_me </v-icon> {{ subItem.title }}</v-list-tile-title>
                      </div>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <span>{{subItem.kcal}}</span>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list-group>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="lime accent-4" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <div class="logo__box">
          <img class="logo" src="../src/assets/food-logo.png">
          <p>
            Gluten Free Recipes
            <br/>
            <small>
              <span class="text--red">and products...</span>
            </small>
          </p>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 450px">
        <v-text-field v-model="searchInput" placeholder="Search..." single-line append-icon="search" :append-icon-cb="() => {}" class="white--text"
          hide-details></v-text-field>
        <v-flex xs12 md6 class="search__radio">


          <v-card-text>
            <p>{{ ex8 || 'null' }}</p>
            <v-radio-group dark v-model="ex8" :mandatory="false">
              <v-radio label="Przepisy" value="radio-1"></v-radio>
              <v-radio label="Produkty" value="radio-2"></v-radio>
            </v-radio-group>
          </v-card-text>

        </v-flex>
      </v-layout>

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

        <!-- RECIPES LIST -->

        <v-layout row>
          <v-flex xs12>
            <v-card>
              <v-toolbar color="lime accent-3" dark>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Przepisy</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>room_service</v-icon>
                </v-btn>
              </v-toolbar>
              <v-list>
                <v-list-group v-for="item in recipesList" :value="item.active" v-bind:key="item.category">
                  <v-list-tile slot="item" @click="">
                    <v-list-tile-action>
                      <v-icon>{{ item.action }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.category }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-icon>keyboard_arrow_down</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="">

                    <v-list-tile-content>
                      <div class="subItem">

                        <v-icon>navigate_next</v-icon>
                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>

                      </div>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-icon>{{ subItem.action }}</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list-group>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-list>
    </v-navigation-drawer>
    </v-navigation-drawer>
    <main>
      <v-navigation-drawer temporary v-model="left" fixed>

        <!-- RECIPE INPUT -->

        <v-container>
          <form>
            <v-text-field label="Przepis na..." v-model="recipe.title" :counter="10" required></v-text-field>
            <v-text-field label="Składniki" v-model="recipe.ingridients" required></v-text-field>
            <v-layout>
              <v-text-field name="input-7-1" label="Sposób wykonania" v-model="recipe.directions" :counter="100" multi-line></v-text-field>
            </v-layout>
            <v-select label="Kategoria" v-model="recipe.select" :items="recipe.items" required></v-select>
            <v-btn @click="submitRecipe">Dodaj</v-btn>
            <v-btn @click="clearRecipe">Wyczyść</v-btn>
          </form>
        </v-container>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid>
          <v-layout align-center>

            <!-- NEW RECIPE -->

            <ul>
              <li class="mt-4" v-for="(r, index) of recipesList" :key="index">
                <span v-for="subItem in r.items" v-bind:key="subItem.title" @click="">
                  <span v-if="subItem.title">
                    <span class="display-1 mt-4">{{subItem.title}} </span> ||
                    <span class="title"> {{subItem.select}}</span>
                    <v-layout row wrap>
                      <v-flex md6>
                        <v-card class="text-md-center mb-2" light color="grey lighten-4 mr-2">
                          <v-card-text class="px-2">
                            <img :src="subItem.url" class="logo--lighten mb-2" alt="">
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex md6>
                        <v-card light color="grey lighten-4 mb-2">
                          <v-card-text class="px-2">
                            <h2 class="title">SKŁADNIKI:</h2>
                            {{subItem.ingridients}}
                          </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                    <v-flex xs12>
                      <v-card class="mb-5" light color="grey lighten-4">
                        <v-card-text class="px-2">
                          <h2 class="title">PRZYGOTOWANIE:</h2>
                          {{subItem.directions}}
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </span>
                  <span class="welcome--box" v-html="subItem.promo" v-else></span>
                </span>
              </li>
            </ul>
          </v-layout>

          <!-- RECIPE DISPLAY -->

          <ul>
            <li class="mt-4" v-for="(r, index) of filteredRecipes" :key="index">
              <span v-for="subItem in r.items" v-bind:key="subItem.title" @click="">
                <span v-if="subItem.title">
                  <span class="display-1 mt-4">{{subItem.title}} </span> ||
                  <span class="title"> {{subItem.select}}</span>
                  <v-layout row wrap>
                    <v-flex md6>
                      <v-card class="text-md-center mb-2" light color="grey lighten-4 mr-2">
                        <v-card-text class="px-2">
                          <img :src="subItem.url" class="logo--lighten mb-2" alt="">
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex md6>
                      <v-card light color="grey lighten-4 mb-2">
                        <v-card-text class="px-2">
                          <h2 class="title">SKŁADNIKI:</h2>
                          {{subItem.ingridients}}
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                  <v-flex xs12>
                    <v-card class="mb-5" light color="grey lighten-4">
                      <v-card-text class="px-2">
                        <h2 class="title">PRZYGOTOWANIE:</h2>
                        {{subItem.directions}}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </span>
                <span class="welcome--box" v-html="subItem.promo" v-else></span>
              </span>
            </li>
          </ul>
          </v-layout>

          <div class="text-xs-center">
            <v-pagination :length="6" v-model="page"></v-pagination>
          </div>
        </v-container>
      </v-content>
      <v-navigation-drawer right temporary v-model="right" fixed>



        <!-- PRODUCTS INPUT -->

        <v-container>
          <form>
            <v-text-field label="Nazwa produktu" v-model="product.name" :counter="10" required></v-text-field>
            <v-text-field label="Kcal w 100g" v-model="product.kcal" required></v-text-field>
            <v-select label="Kategoria" v-model="product.select" :items="product.items" required></v-select>
            <v-btn @click="submitProduct">Dodaj</v-btn>
            <v-btn @click="clearProduct">Wyczyść</v-btn>
          </form>
        </v-container>
      </v-navigation-drawer>
    </main>
    <v-footer color="grey darken-4" class="white--text" app>
      <span>
        <small>&copy; Copyright 2017, Dawid Nawrocki</small>
      </span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>












<script>
  import {
    breakfastRecipe
  } from './firebase';
  import {
    dinnerRecipe
  } from './firebase';
  import {
    supperRecipe
  } from './firebase';
  import {
    dessertRecipe
  } from './firebase';
  import {
    snackRecipe
  } from './firebase';

  export default {
    data() {
      return {
        searchInput: '',
        page: 1,
        ex8: 'radio-1',
        ex9: 'radio-3',
        drawer: true,
        drawerRight: true,
        right: null,
        left: null,
        imagePlaceholder: "https://mezmiz.com/media/1_0b3304fb6a6650ea6732ca231338659d.png",



        newRecipe: [{
            action: "free_breakfast",
            category: "Śniadanie",
            items: [{
              title: "",
              directions: '',
              ingridients: '',
              url: '',
              select: 'Śniadanie',
              promo: '&#10003; <em>Zbuduj listę przepisów na potrawy bezglutenowe...</em>'
            }]
          },
          {
            action: "restaurant_menu",
            category: "Obiad",
            items: [{
              title: "",
              directions: '',
              ingridients: '',
              url: '',
              select: 'Obiad',
              promo: '&#10003; <em>Korzystaj na laptopie i smartfonie...</em>'
            }]
          },
          {
            action: "restaurant",
            category: "Kolacja",
            items: [{
              title: "",
              directions: '',
              ingridients: '',
              url: '',
              select: 'Obiad',
              promo: '&#10003; <em>Lista ulubionych produktów...</em>'
            }]
          },
          {
            action: "cake",
            category: "Deser",
            items: [{
              title: "",
              directions: '',
              ingridients: '',
              url: '',
              select: 'Obiad',
              promo: '&#10003; <em>Nieograniczona baza danych...</em>'
            }]
          },
          {
            action: "child_care",
            category: "Przekąska",
            items: [{
              title: "",
              directions: '',
              ingridients: '',
              url: '',
              select: 'Obiad',
              promo: '&#10003; <em>Lista zakupów</em>'
            }]
          }
        ],
        recipesList: [],
     





        recipe: {
          title: "",
          ingridients: [],
          directions: "",
          select: "",
          url: "",
          items: ["Śniadanie", "Obiad", "Kolacja", "Deser", "Przekąska"]
        },















        productsList: [{
            action: "chevron_right",
            category: "Mięso i ryby",
            items: [{
              title: "Pierś z kurczaka",
              kcal: "290 kcal"
            }]
          },
          {
            action: "chevron_right",
            category: "Nabiał i jaja",
            items: [{
                title: "Jajka przepiórcze",
                kcal: "80 kcal"
              },
              {
                title: "Jajka kurze",
                kcal: "40 kcal"
              },
              {
                title: "Jajka kacze",
                kcal: "60 kcal"
              }
            ]
          },
          {
            action: "chevron_right",
            category: "Pieczywo",
            items: [{
              title: "Chleb na zakwasie",
              kcal: "20 kcal"
            }]
          },
          {
            action: "chevron_right",
            category: "Mrożonki",
            items: [{
              title: "Warzywa na patelnię",
              kcal: "200 kcal"
            }]
          },
          {
            action: "chevron_right",
            category: "Owoce i warzywa",
            items: [{
              title: "Arbuz",
              kcal: "100 kcal"
            }]
          },
          {
            action: "chevron_right",
            category: "Słodycze",
            items: [{
              title: "Krówki",
              kcal: "210 kcal"
            }]
          },
          {
            action: "chevron_right",
            category: "Alkohol",
            items: [{
              title: "Piwo IPA",
              kcal: "250 kcal"
            }]
          }
        ],
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
        }
      }
    },
    methods: {
      async submitRecipe() {
        await fetch(
            `https://pixabay.com/api/?key=6818598-da2281dcdfb680148ef22e7a5&q=${this
          .recipe.name}&image_type=photo&min_width=200`
          )
          .then(function (response) {
            return response.json();
          })
          .then(data => {
            if (data.hits[0] === undefined) {
              this.recipe.url = this.imagePlaceholder;
            } else {
              this.recipe.url = data.hits[0].webformatURL;
            }
          });


        let index;
        switch (this.recipe.select) {
          case "Śniadanie":
            index = 0;
            break;
          case "Obiad":
            index = 1;
            break;
          case "Kolacja":
            index = 2;
            break;
          case "Deser":
            index = 3;
            break;
          case "Przekąska":
            index = 4;
            break;
        }

        // NOWY PRZPIS  
        this.newRecipe[index].items.push({
          title: this.recipe.title,
          directions: this.recipe.directions,
          ingridients: this.recipe.ingridients,
          url: this.recipe.url,
          select: this.recipe.select
        });

        if (index === 0) {
          breakfastRecipe.push({
            title: this.recipe.title,
            directions: this.recipe.directions,
            ingridients: this.recipe.ingridients,
            url: this.recipe.url,
            select: this.recipe.select
          })
        }
        if (index === 1) {
          dinnerRecipe.push({
            title: this.recipe.title,
            directions: this.recipe.directions,
            ingridients: this.recipe.ingridients,
            url: this.recipe.url,
            select: this.recipe.select
          })
        }
        if (index === 2) {
          supperRecipe.push({
            title: this.recipe.title,
            directions: this.recipe.directions,
            ingridients: this.recipe.ingridients,
            url: this.recipe.url,
            select: this.recipe.select
          })
        }
        if (index === 3) {
          dessertRecipe.push({
            title: this.recipe.title,
            directions: this.recipe.directions,
            ingridients: this.recipe.ingridients,
            url: this.recipe.url,
            select: this.recipe.select
          })
        }
        if (index === 4) {
          snackRecipe.push({
            title: this.recipe.title,
            directions: this.recipe.directions,
            ingridients: this.recipe.ingridients,
            url: this.recipe.url,
            select: this.recipe.select
          })
        }


        this.recipe.title = "";
        this.recipe.ingridients = "";
        this.recipe.directions = "";
        this.recipe.url = "";
        this.recipe.select = "";
      },




      clearRecipe() {
        this.recipe.title = "";
        this.recipe.ingridients = "";
        this.recipe.directions = "";
        this.recipe.url = "";
        this.recipe.select = "";
      },
      submitProduct() {
        this.adProductToList();
        this.product.name = "";
        this.product.kcal = "";
        this.product.select = "";
      },
      clearProduct() {
        this.product.name = "";
        this.product.kcal = "";
        this.product.select = "";
      },
      adProductToList() {
        let index;
        switch (this.product.select) {
          case "Mięso i ryby":
            index = 0;
            break;
          case "Nabiał i jaja":
            index = 1;
            break;
          case "Pieczywo":
            index = 2;
            break;
          case "Mrożonki":
            index = 3;
            break;
          case "Owoce i warzywa":
            index = 4;
            break;
          case "Słodycze":
            index = 5;
            break;
          case "Alkohol":
            index = 6;
            break;
        }

        fetch('https://gluten-free-app.firebaseio.com/product.json', {
          method: 'post',
          body: JSON.stringify({
            name: this.product.name,
            directions: this.product.kcal,
            select: this.product.select
          })
        });




        this.productsList[index].items.push({
          title: this.product.name,
          kcal: this.product.kcal + " kcal"
        });
      }
    },
    created() {
      fetch('https://gluten-free-app.firebaseio.com/recipe.json').then(function (data) {
        return data.json();
      }).then((data) => {
        var recipeIDs = [];
        for (let ids in data) {
          data[ids].id = ids;
          recipeIDs.push(data[ids]);

        }


        // POBIERZ Z FIREBASE I DODAJ DO PRODUCT DISPLAY



        this.recipesList = recipeIDs;
        // console.log(this.recipesList[0].items['-KzFE5s7azulqrjNOGrB']);

      


      });
    },
    props: {
      source: String
    },
    computed: {

      // filteredRecipes: function () {
      //   return this.recipesList.filter((data, index) => {
      //     return data[index].items[index].title.match(this.searchInput)})
      // }
      // FILTROWANIE  INPUT / RECIPELIST


    },
    mounted() {
      // console.log(this.recipesList);
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
      filter: drop-shadow( 0 0 1px rgba(255, 255, 255, 1),
      0 0 2px rgba(255, 255, 255, 1),
      0 0 3px rgba(255, 255, 255, 1),
      0 0 4px #ff00de,
      0 0 7px #ff00de,
      0 0 8px #ff00de,
      0 0 10px #ff00de);
    }
    80% {
      filter: saturate(0);
    }
    91% {
      filter: saturate(0);
    }
    92% {
      filter: saturate(100%);
      filter: drop-shadow( 0 0 1px rgba(255, 255, 255, 1),
      0 0 2px rgba(255, 255, 255, 1),
      0 0 3px rgba(255, 255, 255, 1),
      0 0 4px #ff00de,
      0 0 7px #ff00de,
      0 0 8px #ff00de,
      0 0 10px #ff00de);
    }
    93% {
      filter: saturate(0);
    }
    94% {
      filter: saturate(100%);
      filter: drop-shadow( 0 0 1px rgba(255, 255, 255, 1),
      0 0 2px rgba(255, 255, 255, 1),
      0 0 3px rgba(255, 255, 255, 1),
      0 0 4px #ff00de,
      0 0 7px #ff00de,
      0 0 8px #ff00de,
      0 0 10px #ff00de);
    }
    95% {
      filter: saturate(0);
    }
    100% {
      filter: saturate(0);
    }
  }

  .subItem {
    display: flex;
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

  .logo--lighten {
    filter: brightness(140%);
  }

  ul {
    list-style: none;
    width: 100%;
  }

  img {
    max-width: 300px;
  }

  p {
    display: inline-block;
  }

  .text--red {
    color: #fffadb;
  }

  .welcome--box {
    border: 1px dashed lightgray;
    border-radius: 10px;
    padding: 10px;
    color: gray;
  }

  .radio-group--column {
    margin-top: -10px;
    padding: 0;
  }

  .input-group--selection-controls {
    color: #ffffff;
  }

  .search__radio {
    max-width: 30%;
    font-size: 10px;
  }

</style>

