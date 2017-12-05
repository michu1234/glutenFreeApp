<template>
  <div v-if="onoff"  id='ShoppingList'>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="red darken-1" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Lista zakupów</v-toolbar-title>
          </v-toolbar>
          <v-container>
            <v-layout md-row>
                <v-flex md6 sm12 class="mr-2">
                    <v-text-field label="Dodaj produkt..." v-model="productName" :counter="60" required></v-text-field>
                </v-flex>
                  <v-flex md6 hidden-sm-and-down>
                <v-text-field label="Notatki do produktu..." v-model="productNotes" :counter="60" required></v-text-field>
     </v-flex>
            </v-layout>
            <v-btn @click.native="addProduct" color="lime accent-3">Dodaj</v-btn>
              <v-btn @click.native="" color="lime accent-3 elevation-7">Zapisz</v-btn>
            <v-btn @click.native="removeProduct" color="error">Usuń</v-btn>
          

          </v-container>
          <v-divider></v-divider>
          <v-list two-line subheader>
            <v-subheader>Plan na dzisiejsze zakupy:</v-subheader>
           
           
            <div class="container2">
              <span v-for='(product, index) in products' :key='index'>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="product.notifications"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{product.name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{product.notes}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </span>
  
            </div>

          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'ShoppingList',
    props: ['onoff'],
    data() {
      return {
        sound: false,
        video: false,
        invites: false,
        productName: '',
        productNotes: '',
        products: [
          {name: "Marchewka", notes: "najlepiej świeża...", notifications: false}
        ]

      }
    },
    methods: {
      addProduct: function() {
        this.products.push({name: this.productName, notes: this.productNotes, notifications: false});
        this.productName = "";
        this.productNotes = "";
      },
      removeProduct: function(index) {
    
         this.products.splice(index, 1);
  
      }
    }
  }

</script>

<style scoped>
  #ShoppingList {
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 40px;
    width: 100%;
    max-height: 90%;
  }

.container2 {
  overflow-y: scroll;
  height: 45vh;
}

.to--right {
  margin-left: auto;
}
</style>

