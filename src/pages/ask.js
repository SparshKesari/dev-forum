import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'
import { hasuraAdminClient } from '../lib/hasura-admin-client'
import { hasuraUserClient, gql } from '../src/lib/hasura-user-client'

const GetCategories = gql`
  {
    categories {
      id
      name
    }
  }
`

const InsertThread = gql`
  mutation InsertThread(
    $categoryId: uuid!
    $postTitle: String!
    $postMessage: String!
  ) {
    insert_threads_one(
      object: {
        category_id: $categoryId
        title: $postTitle
        posts: { data: { message: $postMessage } }
      }
    ) {
      id
      updated_at
      title
      posts {
        message
        created_at
        thread {
          category {
            name
          }
          author {
            name
          }
        }
      }
    }
  }
`

export const getStaticProps = async () => {
  const { categories } = await hasuraAdminClient.request(GetCategories)
  return { props: { categories } }
}

export default function AskPage({ categories }) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm()

  const onSubmit = async ({ categoryId, postTitle, postMessage }) => {
    try {
      console.log({ categoryId, postTitle, postMessage })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <h1 className='text-3xl'>Ask a Question:</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <select {...register('categoryId')}>
          {categories.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
        <div>
          <input
            type='text'
            {...register('postTitle', {
              required: 'You must provide a valid title.',
            })}
            placeholder='Post Title'
          />
          {errors.postTitle && <span>{errors.postTitle.message}</span>}
        </div>
        <div>
          <textarea
            {...register('postMessage', {
              required: 'Leaving an Empty post?',
            })}
            placeholder='Enter your message'
          />
          {errors.postMessage && <span>{errors.postMessage.message}</span>}
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='bg-green-500 hover:bg-green-600 p-2 rounded font-semibold text-white focus-within:outline-none'
        >
          Make the post
        </button>
      </form>
    </Layout>
  )
}
