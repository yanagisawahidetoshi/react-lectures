import { css } from '@emotion/css';

export const Name = () => {
  return (
    <h1
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        paddingBottom: 8,
      }}
    >
      柳沢　英俊
    </h1>
  );
};

export const Contents = () => {
  const container = css({
    textAlign: 'left',
    '& dt': {
      fontWeight: 'bold',
    },
    '& dd + dt': {
      marginTop: '8px',
    },
  });
  return (
    <dl className={container}>
      <dt>職業</dt>
      <dd>プログラマー</dd>
      <dt>住所</dt>
      <dd>大阪</dd>
      <dt>性別</dt>
      <dd>男性</dd>
    </dl>
  );
};

export const Profile = () => {
  return (
    <section>
      <Name />
      <div
        style={{
          marginTop: '32px',
          position: 'relative',
        }}
      >
        <p
          style={{
            backgroundColor: '#FF0000',
            position: 'absolute',
            top: 0,
          }}
        >
          Absolute
        </p>
        <Contents />
      </div>
      <footer
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        copyright &copy; 2023 Hidetoshi Yanagisawa
      </footer>
    </section>
  );
};
