import Grandchild from '../destructuring/Grandchild';

function Child({ user }) {
  const { name, age, city } = user;

  return (
    <div>
      <h2>Child Component</h2>

      <Grandchild
        name={name}
        age={age}
        city={city}
      />
    </div>
  );
}

export default Child;
