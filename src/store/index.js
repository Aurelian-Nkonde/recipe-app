import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [
      // {
      //   id: 0,
      //   name: "Sadza nemazai",
      //   chef: "thomas muller",
      //   ingredients: ["water", "salt", "milk"],
      //   image: "one",
      //   summary:
      //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas.",
      // },
      // {
      //   id: 1,
      //   name: "Meat and Pap",
      //   chef: "Mbuya GUdo",
      //   ingredients: ["water", "salt", "milk"],
      //   image: "one",
      //   summary:
      //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas.",
      // },
    ]
  },
  getters: {
    recipes(state){
      return state.recipes
    }
  },
  mutations: {
    deleteRecipe(state, value){
      state.recipes.pop(value)
    },
    addRecipe(state, data){
      state.recipes.push({
        id: 2,
        name: data.name,
        chef: data.chef,
        ingredients: data.ingredients,
        summary: data.summary
      })
    }
  },
  actions: {
    deleteRecipe({commit, state}){
      commit('deleteRecipe', state)
    },
    addRecipe(context){
      context.commit('addRecipe', context.state)
    }
  },
  modules: {},
});
