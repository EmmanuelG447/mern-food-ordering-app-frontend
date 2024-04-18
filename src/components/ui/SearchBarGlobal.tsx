import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Search query is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  placeHolder: string;
};

const SearchBarGlobal = ({ placeHolder }: Props) => {
  const form = useForm<SearchForm>({
    resolver: undefined,
    defaultValues: {
      searchQuery: "",
    },
  });

  const [searchResults, setSearchResults] = useState<HTMLElement[]>([]);

  const onSubmit = (formData: SearchForm) => {
    const searchQuery = formData.searchQuery.toLowerCase();
    const elements = Array.from(document.querySelectorAll('*')) as HTMLElement[];
    const results = elements.filter(element => {
      return element.textContent && element.textContent.toLowerCase().includes(searchQuery);
    });
    setSearchResults(results);
  };

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });
    setSearchResults([]);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3 ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl focus-visible:ring-0"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full"
        >
          Reset
        </Button>
        <Button type="submit" className="rounded-full bg-orange-500">
          Search
        </Button>
      </form>

      {searchResults.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Search Results:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result.textContent}</li>
            ))}
          </ul>
        </div>
      )}
    </Form>
  );
};

export default SearchBarGlobal;
