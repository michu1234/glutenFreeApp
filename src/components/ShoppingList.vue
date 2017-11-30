<template>
  <div id='ShoppingList'>
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
                    <v-text-field label="Dodaj produkt..." v-model="name" :rules="nameRules" :counter="60" required></v-text-field>
                </v-flex>
                  <v-flex md6 hidden-sm-and-down>
                <v-text-field label="Notatki do produktu..." v-model="name" :rules="nameRules" :counter="60" required></v-text-field>
     </v-flex>
            </v-layout>
            <v-btn color="lime accent-3">Dodaj</v-btn>
            <v-btn color="error">Usuń</v-btn>

          </v-container>
          <v-divider></v-divider>
          <v-list two-line subheader>
            <v-subheader>Plan na dzisiejsze zakupy...</v-subheader>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="notifications"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Produkt</v-list-tile-title>
                <v-list-tile-sub-title>Notatki do produktu</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="sound"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Produkt</v-list-tile-title>
                <v-list-tile-sub-title>Notatki do produktu</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="video"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Produkt</v-list-tile-title>
                <v-list-tile-sub-title>Notatki do produktu</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="invites"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Produkt</v-list-tile-title>
                <v-list-tile-sub-title>Notatki do produktu</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'ShoppingList',
    data() {
      return {
        notifications: false,
        sound: false,
        video: false,
        invites: false

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
  }

</style>

