import DropdownNotes from "./DropdownNotes";
import Title from "./Title";
import DisplayImg from "./DisplayImg";

const Home = () => {
    return (
        <div>
            <Title text={'Pemrograman Web'} jenis={"Title"}></Title>

            <Title text={'Tools yang Dibutuhkan'} jenis={"Subtitle"}></Title>
            <DisplayImg></DisplayImg>

            <Title text={'Notes'}></Title>
            <DropdownNotes></DropdownNotes>
        </div>
    )
}

export default Home;