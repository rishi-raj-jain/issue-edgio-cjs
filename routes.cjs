import { Router } from '@edgio/core/router'

export default new Router().static('assets').fallback(({ renderWithApp }) => renderWithApp())
