export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60c0e3c00839cf00923b9482',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-88svoem3',
                  apiId: '6aee2579-37f1-4af5-89a7-a4787a111ee1'
                },
                {
                  buildHookId: '60c0e3c0f6604200b8422546',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-18a693yq',
                  apiId: '4e8fd4f0-d657-44b4-a03b-6219669bc02b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SDiamante13/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-18a693yq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
