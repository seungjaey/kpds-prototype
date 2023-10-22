import { NavigationList } from '@/components/NavigationList';

const FoundationsPage = () => {
  return (
    <main>
      <section>
        <NavigationList />
      </section>
      <section>
        <h1>Black & White</h1>
        <ul>
          <li style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ width: 80, height: 80, borderRadius: 12, backgroundColor: '#000000' }} />
            <div>
              <div>Black</div>
              <div>#000000</div>
              <div>$black</div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default FoundationsPage;
