// posts will be populated at build time by getStaticProps()
function graph({ posts }) {
  console.log('hello from top posts',posts,'top posts');
  return (
    <ul>
      {posts.data.map((post) => (
        <li>{post.id}</li>
      ))}
    </ul>
  )
}


export default graph


export async function getStaticProps() {
  
  const res = await fetch('https://infinite-atoll-05621.hrokuapp.com/faceboeok/campaigns')
  const posts = await res.json()
  console.log(typeof(posts))

  
  return {
    props: {
      posts,
    },
  }
}