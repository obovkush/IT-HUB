import {Article} from '../../../src/entities/Article';
import {BASE_URL} from '../../consts/api';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Биология',
    img: 'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
    views: 1022,
    createdAt: '29.05.2024',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy.request({
        method: 'POST',
        url: `${BASE_URL}/articles`,
        headers: {Authorization: 'asasf'},
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `${BASE_URL}/articles/${articleId}`,
        headers: {Authorization: 'asasf'},
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
