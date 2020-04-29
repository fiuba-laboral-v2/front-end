import { omitTypename } from "$hooks/useMutation";

const expectNotToChange = (value: any) =>
  expect(omitTypename(value)).toEqual(value);

const expectToChange = (oldValue: any, newValue: any) =>
  expect(omitTypename(oldValue)).toEqual(newValue);

describe("omitTypename", () => {
  describe("When it's given a non-plain object it does nothing", () => {
    it("does not affect null", () =>
      expectNotToChange(null));

    it("does not affect undefined", () =>
      expectNotToChange(undefined));

    it("does not affect a boolean", () =>
      expectNotToChange(true));

    it("does not affect a string", () =>
      expectNotToChange("abc"));

    it("does not affect a number", () =>
      expectNotToChange(123));

    it("does not affect an array", () =>
      expectNotToChange([{ __typename: "TypeName", foo: "bar" }])
    );
  });

  it("removes __typename from a plain object", () =>
    expectToChange({ __typename: "TypeName", foo: "bar" }, { foo: "bar" })
  );

  it("does not affect objects without __typename", () =>
    expectNotToChange({ bar: "baz" })
  );

  it("empties objects that have only __typename", () =>
    expectToChange({ __typename: "TypeName" }, {})
  );

  it("removes __typename from nested objects", () =>
    expectToChange(
      { bar: { baz: "foo", __typename: "TypeName" }, foo: "bar" },
      { bar: { baz: "foo" }, foo: "bar" }
    )
  );

  it("removes __typename from nested objects inside arrays", () =>
    expectToChange(
      { bar: [{ baz: "foo", __typename: "TypeName" }], foo: "bar" },
      { bar: [{ baz: "foo" }], foo: "bar" }
    )
  );
});
