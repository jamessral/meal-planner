const JsonViews = require('../../../views/json/ingredient_views')
/**
 * Test for IngredientView
 */
describe('IngredientView', () => {
  describe('getAll', () => {
    it('should return array of mapped ingredients when ingredients passed', () => {
      const ingredients = [
        {
          _id: 1,
          name: 'test1',
          description: 'description1',
          price: 12,
          dontShowMe: 'please',
          meEither: 'ok',
        },
        {
          _id: 2,
          name: 'test2',
          description: 'description2',
          price: 16,
          dontShowMe: 'thanks',
          meEither: 'nooooo',
        },
      ]

      expect(JsonViews.getAll(ingredients)).toEqual([
        {
          id: 1,
          name: 'test1',
          description: 'description1',
          price: 12,
        },
        {
          id: 2,
          name: 'test2',
          description: 'description2',
          price: 16,
        },
      ])
    })

    it('should return an emtpy array if none passed', () => {
      expect(JsonViews.getAll()).toEqual({ ingredients: [] })
    })
  })

  describe('getOne', () => {
    it('should return mapped ingredient if ingredient given', () => {
      const ingredient = {
        _id: 1,
        name: 'test',
        description: 'description',
        price: 42,
        dontShowMe: 'please',
        meEither: 'ok',
      }
      expect(JsonViews.getOne(ingredient)).toEqual({
        id: 1,
        name: 'test',
        description: 'description',
        price: 42,
      })
    })
  })
})