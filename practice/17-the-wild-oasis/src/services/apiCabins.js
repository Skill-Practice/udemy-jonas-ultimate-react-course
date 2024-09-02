import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  // const { data, error } = await supabase
  // .from('cabins')
  // .insert([
  //   { some_column: 'someValue', other_column: 'otherValue' },
  // ])
  // .select()

  const { data, error } = await supabase.from("cabins").insert([newCabin]);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be crated");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
