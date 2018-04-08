const JsonViews = require('../../../views/json/recipe_views')
/**
 * Test for RecipesJsonViews
 */
describe('RecipeJsonViews', () => {
  describe('getAll', () => {
    it('should return array of mapped ingredients when ingredients passed', () => {
      const recipes = [
        {
          _id: 1,
          name: 'test1',
          description: 'description1',
          ingredientIds: ['ingredients'],
          dontShowMe: 'please',
          meEither: 'ok',
        },
        {
          _id: 2,
          name: 'test2',
          description: 'description2',
          dontShowMe: 'thanks',
          ingredientIds: ['ingredients'],
          meEither: 'ok',
        },
      ]

      expect(JsonViews.getAll(recipes)).toEqual([
        {
          id: 1,
          name: 'test1',
          description: 'description1',
          ingredientIds: ['ingredients'],
        },
        {
          id: 2,
          name: 'test2',
          description: 'description2',
          ingredientIds: ['ingredients'],
        },
      ])
    })

    it('should return an emtpy array if none passed', () => {
      expect(JsonViews.getAll()).toEqual({ recipes: [] })
    })
  })

  describe('getOne', () => {
    it('should return mapped ingredient if ingredient given', () => {
      const recipe = {
        _id: 1,
        name: 'test',
        description: 'description',
        ingredientIds: ['ingredients'],
        dontShowMe: 'please',
        meEither: 'ok',
      }
      expect(JsonViews.getOne(recipe)).toEqual({
        id: 1,
        name: 'test',
        description: 'description',
        ingredientIds: ['ingredients'],
      })
    })
  })
})
