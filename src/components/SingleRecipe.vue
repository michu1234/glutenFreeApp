<template>
  <div class="hello">
    <ul>
      <li class="mt-4" v-for="(r, index) of filteredRecipes" :key="index">
        <span v-for="subItem in r.items" v-bind:key="subItem.title" @click="">
                 <p>{{subItem}}</p>
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
  </div>
</template>

<script>
  import {
    breakfastRecipe
  } from '../firebase';
  import {
    dinnerRecipe
  } from '../firebase';
  import {
    supperRecipe
  } from '../firebase';
  import {
    dessertRecipe
  } from '../firebase';
  import {
    snackRecipe
  } from '../firebase';

  export default {
    data() {
      return {
        ide: null,
        searchInput: '',
        page: 1,
        ex8: 'radio-1',
        ex9: 'radio-3',
        drawer: true,
        drawerRight: true,
        right: null,
        left: null,
        imagePlaceholder: "https://mezmiz.com/media/1_0b3304fb6a6650ea6732ca231338659d.png",
        recipesList: [],
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
        // console.log(this.recipesList[0].items);
        // console.log(this.id);

        // this.recipesList.forEach((data, index) => {
        //   console.log(data.items['-KzFE5s7azulqrjNOGrB'].title);
        // })


      });
    },
    props: {
      source: String
    },

    watch: {
      '$route' (to, from) {
       this.ide = this.$route.params.id
    }
    },
    computed: {

      filteredRecipes() {
     return this.recipesList.filter((data) => {
          console.log(data.items[this.ide])
         return data.items[this.ide]
        
          // return data.items['-KzFE5s7azulqrjNOGrB'].title.match(this.searchInput);
         
        })
         
      }
      // FILTROWANIE  INPUT / RECIPELIST
   

    },
    mounted() {
    
    }
  };

</script>





<style scoped>
 img {
    max-width: 300px;
  }

</style>

