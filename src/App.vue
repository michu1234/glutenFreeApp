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
    <v-toolbar color="yellow accent-4" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <div class="logo__box">
          <img class="logo" src="../src/assets/food-logo.png">
          <p>
            Gluten Free
            <br/>
            <small>
              <span class="text--pink">for...</span>
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
    <main>
      <v-navigation-drawer temporary v-model="left" fixed>
        <v-container>
          <form>
            <v-text-field
              label="Przepis na..."
              v-model="przepisy.name"
              :error-messages="nameErrors"
              :counter="10"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
              required
            ></v-text-field>
            <v-text-field
              label="Składniki"
              v-model="przepisy.email"
              :error-messages="emailErrors"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              required
            ></v-text-field>
             <v-layout>
                  <v-text-field
                    name="input-7-1"
                    label="Sposób wykonania"
                    multi-line
                  ></v-text-field>
              </v-layout>
            <v-select
              label="Kategoria"
              v-model="select"
              :items="przepisy.items"
              :error-messages="selectErrors"
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
              required
            ></v-select>
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
        </v-container>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-tooltip right>
              <v-btn icon large :href="source" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-layout>
        </v-container>
      </v-content>
      <v-navigation-drawer right temporary v-model="right" fixed>
        <v-container>
        <form>
          <v-text-field
            label="Nazwa produktu"
            v-model="produkty.name"
            :error-messages="nameErrors"
            :counter="10"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Kcal w 100g"
            v-model="produkty.email"
            :error-messages="emailErrors"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            required
          ></v-text-field>
          <v-select
            label="Kategoria"
            v-model="select"
            :items="produkty.items"
            :error-messages="selectErrors"
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
            required
          ></v-select>
          <v-btn @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
        </v-container>
      </v-navigation-drawer>
    </main>
    <v-footer color="yellow accent-4" class="white--text" app>
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
      produkty: {
        name: '',
        email: '',
        select: null,
        items: [
          'Mięso i ryby',
          'Nabiał i jaja',
          'Owoce i warzywa',
          'Pieczywo',
          'Słodycze',
          'Mrożonki',
          'Alkohol'
        ]
      },
      przepisy: {
        name: '',
        email: '',
        select: null,
        items: [
          'Śniadanie',
          'Obiad',
          'Kolacja',
          'Deser',
          'Przekąska'
        ]
      }
    }),
    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      }
    },
    props: {
      source: String
    }
  }

</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Chewy');

  .logo {
    width: 100px;
    vertical-align: bottom;
  }

  .logo__box {
    display: inline-block;
    line-height: 16px;
    font-family: 'Chewy', cursive;

    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7);
  }

  p {
    display: inline-block;
  }

  .text--pink {
    color: #f50057;
  }

</style>

