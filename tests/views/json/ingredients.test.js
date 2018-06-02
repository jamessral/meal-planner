const JsonViews = require('../../../views/json/ingredientViews')
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

  describe('create', () => {
    it('should return mapped new ingredient if exists', () => {
      const ingredient = {
        _id: 1,
        name: 'test',
        description: 'description',
        price: 42,
        dontShowMe: 'please',
        meEither: 'ok',
      }
      expect(JsonViews.create(ingredient)).toEqual({
        id: 1,
        name: 'test',
        description: 'description',
        price: 42,
      })
    })

    it('should return 500 error if does not exist', () => {
      expect(JsonViews.create()).toEqual(
        JsonViews.error('Unable to create ingredient', 500)
      )
    })
  })

  describe('error', () => {
    it('should return formatted error message and status', () => {
      const fourOhFour = JsonViews.error('Four Oh Four', 404)
      const fiveHundred = JsonViews.error('Five Hundred', 500)

      expect(fourOhFour).toEqual({
        message: 'Error: Four Oh Four',
        status: 404,
      })

      expect(fiveHundred).toEqual({
        message: 'Error: Five Hundred',
        status: 500,
      })
    })
  })
})
