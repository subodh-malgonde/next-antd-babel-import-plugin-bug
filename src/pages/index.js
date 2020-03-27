import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "title",
    key: "title"
  },
    {
    title: "Age",
    dataIndex: "age",
    key: "age"
  }
];

export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
          {
            title: "John Doe",
            age: 28
          },
          {
            title: "Johnny Doe",
            age: 29
          }
      ]
    }
  }
  render() {
    return (
      <>
        <main>
          <h1>Hello World</h1>
          <Table
            columns={columns}
            dataSource={this.state.data}
            pagination={false}
            rowKey="id"
          />
        </main>
      </>
    );
  }
}

export default Home
