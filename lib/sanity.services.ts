// Dans un fichier comme articleService.ts
import client from './sanity.client'

export async function getOneArticle(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`
  const params = {slug}

  return await client.fetch(query, params)
}

export async function getArticleByCategorie(categoryTitle: string) {
    const query = `
        *[_type == "post" && references(*[_type=="category" && title==$categoryTitle]._id)]
    `
    const params = {categoryTitle}

    return await client.fetch(query, params)
}

export async function getAllArticle() {
    const query = `*[_type == "post"]`

    return await client.fetch(query)
}

export async function getAllCategories() {
    const query = `*[_type == "category"]`
    return await client.fetch(query)
}

export async function getAllArticleWithCategories() {
    const query = `
      *[_type == "post"]{
        ...,
        "categories": categories[]->{
          title,
          description
        }
      }
    `
    return await client.fetch(query)
}
  