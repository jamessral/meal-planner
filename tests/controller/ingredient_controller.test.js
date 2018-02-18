const IngredientController = require('../../controllers/ingredients_controller')
/**
 * Test for IngredientController
 */
describe('IngredientController', () => {
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

      expect(IngredientController.getAll(ingredients)).toEqual([
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
  })
})
