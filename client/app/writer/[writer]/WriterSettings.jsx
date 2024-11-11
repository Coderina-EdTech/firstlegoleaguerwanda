// pages/writer/[writer]/dashboard.js
import { useRouter } from "next/router";
import Layout from "../../../components/writer/Layout";

const WriterSettings = ({ writer }) => {
  // Your dashboard logic, using 'writer' prop

  return (
    <Layout>
      <div>
        <h1>Settings for {writer}</h1>
        {/* Your dashboard content */}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { writer } = params;

  // Fetch data specific to the writer using 'writer' parameter
  // For example:
  // const writerData = await fetchWriterData(writer);

  return {
    props: {
      writer,
      // Pass any additional data fetched from the server as props
    },
  };
}

export default WriterSettings;
