import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <AddCabin />

        {/* <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>

        {showForm && <CreateCabinForm />} */}
      </Row>
    </>
  );
}

export default Cabins;
