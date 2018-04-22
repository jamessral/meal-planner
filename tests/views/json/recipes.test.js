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

    it('should return error if ingredient not given', () => {
      expect(JsonViews.getOne())
        .toEqual(JsonViews.error('Unable to find recipe', 404))
    })
  })

  describe('create', () => {
    it('should return formatted recipe if exists', () => {
      const recipe = {
        _id: 1,
        name: 'test',
        description: 'description',
        ingredientIds: ['ingredientIds'],
        dontShowMe: 'please',
        meEither: 'ok',
      }

      expect(JsonViews.create(recipe)).toEqual({
        id: 1,
        name: 'test',
        description: 'description',
        ingredientIds: ['ingredientIds'],
      })
    })

    it('should return error if recipe does not exist', () => {
      expect(JsonViews.create())
        .toEqual(JsonViews.error('Unable to create recipe', 500))
    })
  })

  describe('error', () => {
    it('should return formatted message and status code', () => {
      const fourOhFour = JsonViews.error('FourOhFour', 404)
      const fiveHundred = JsonViews.error('FiveHundred', 500)

      expect(fourOhFour).toEqual({
        message: 'Error: FourOhFour',
        status: 404,
      })

      expect(fiveHundred).toEqual({
        message: 'Error: FiveHundred',
        status: 500,
      })
    })
  })
})
