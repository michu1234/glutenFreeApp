<template>
  <div class="hello">

    <!-- <p>{{filteredList[0].title}}</p> -->
    <ul>
      <li class="mt-4">
        <!-- <span> -->
          <!-- <span v-if="subItem.title"> -->
            <span class="display-1 mt-4">{{filteredList[0].title}} </span> ||
            <span class="title"> {{filteredList[0].select}}</span>
            <v-layout row wrap mt-4>
              <v-flex md6>
                <v-card class="text-md-center mb-2" light color="grey lighten-4 mr-2">
                  <v-card-text class="px-2">
                    <img :src="filteredList[0].url" class="logo--lighten mb-2" alt="">
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md6>
                <v-card light color="grey lighten-4 mb-2">
                  <v-card-text class="px-2">
                    <h2 class="title">SKŁADNIKI:</h2>
                    {{filteredList[0].ingridients}}
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            <v-flex xs12>
              <v-card class="mb-5" light color="grey lighten-4">
                <v-card-text class="px-2">
                  <h2 class="title">PRZYGOTOWANIE:</h2>
                  {{filteredList[0].directions}}
                </v-card-text>
              </v-card>
            </v-flex>
          <!-- </span>
          <span class="welcome--box" v-html="subItem.promo" v-else></span>
        </span> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { breakfastRecipe } from "../firebase";
import { dinnerRecipe } from "../firebase";
import { supperRecipe } from "../firebase";
import { dessertRecipe } from "../firebase";
import { snackRecipe } from "../firebase";

export default {
  props: ['id'],
  data() {
    return {
      searchInput: "",
      page: 1,
      ex8: "radio-1",
      ex9: "radio-3",
      drawer: true,
      drawerRight: true,
      right: null,
      left: null,
      imagePlaceholder:
        "https://mezmiz.com/media/1_0b3304fb6a6650ea6732ca231338659d.png",
      recipesList: [],
      filteredList: []
    };
  },
  created() {
    fetch("https://gluten-free-app.firebaseio.com/recipe.json")
      .then(function(data) {
        return data.json();
      })
      .then(data => {
        var recipeIDs = [];
        for (let ids in data) {
          data[ids].id = ids;
          recipeIDs.push(data[ids]);
        }
        this.recipesList = recipeIDs;
        console.log(this.recipesList)
      });
  },
  watch: {
    id() {
      var recipes = this.recipesList;
      var id = this.id;
      for (let recipe of recipes) {
        let currentRecipe = [];
        for (let key in recipe.items) {
          if (key === id) {
            currentRecipe.unshift(recipe.items[id]);
            this.filteredList = currentRecipe;
          }
        }
      }
    }
  },
  computed: {
    filteredRecipes: function() {
      // return data.items['-KzFE5s7azulqrjNOGrB'].title.match(this.searchInput);
    }
    // FILTROWANIE  INPUT / RECIPELIST
  }
};
</script>





<style scoped>
img {
  max-width: 300px;
  border-radius: 10px;
  border: 1px solid #aeff00;
}
ul {
  list-style: none;
}
</style>

