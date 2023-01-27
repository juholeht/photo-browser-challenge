import { 
    fetchListOfPhotos, 
    fetchListOfAlbums, 
    fetchUserInfo,
    fetchPhotoInfo,
    fetchAlbumInfo,
    fetchAlbumPhotos, 
    PUBLIC_API_URL, 
    createHttpErrorMessage,
    createInvalidParamErrorMessage } from "./API";

describe("fetchListOfPhotos", () => {
    beforeEach(() => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: "mocked data" }),
          ok: true,
        })
      );
    });
  
    afterEach(() => {
      global.fetch.mockRestore();
    });
  
    it("should call the fetch API with the correct URL", () => {
      fetchListOfPhotos(1, 20);
      expect(global.fetch).toHaveBeenCalledWith(
        `${PUBLIC_API_URL}/photos?_page=1&_limit=20`
      );
    });
  
    it("should throw an error if the page parameter is invalid", () => {
      expect(() => fetchListOfPhotos(undefined, 20)).toThrowError(
        createInvalidParamErrorMessage(undefined, 20)
      );
    });
  
    it("should throw an error if the limit parameter is invalid", () => {
      expect(() => fetchListOfPhotos(1, undefined)).toThrowError(
        createInvalidParamErrorMessage(1, undefined)
      );
    });

    it("should handle a not ok HTTP response", async () => {
        global.fetch.mockImplementationOnce(() =>
          Promise.resolve({
            ok: false,
            status: 500,
          })
        );
        let testError = {message: "foo"};
        try {
          await fetchListOfPhotos(1, 1);
        } catch (error) {
          testError = error;
        }
        expect(testError.message).toEqual(createHttpErrorMessage(500));
      });

    it("should return the data when the response is ok", async () => {
        const data = await fetchListOfPhotos(1,1);
        expect(data).toEqual({ data: "mocked data" });
    });
});


describe("fetchAlbumPhotos", () => {
    beforeEach(() => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: "mocked data" }),
          ok: true,
        })
      );
    });
  
    afterEach(() => {
      global.fetch.mockRestore();
    });
  
    it("should call the fetch API with the correct URL", () => {
      fetchAlbumPhotos(1, 1, 20);
      expect(global.fetch).toHaveBeenCalledWith(
        `${PUBLIC_API_URL}/albums/1/photos?_page=1&_limit=20`
      );
    });
  
    it("should throw an error if the palbumId parameter is invalid", () => {
        expect(() => fetchAlbumPhotos(undefined, 1, 20)).toThrowError(
          createInvalidParamErrorMessage(undefined)
        );
    });

    it("should throw an error if the page parameter is invalid", () => {
      expect(() => fetchAlbumPhotos(1, undefined, 20)).toThrowError(
        createInvalidParamErrorMessage(undefined, 20)
      );
    });
  
    it("should throw an error if the limit parameter is invalid", () => {
      expect(() => fetchAlbumPhotos(1, 1, undefined)).toThrowError(
        createInvalidParamErrorMessage(1, undefined)
      );
    });

    it("should handle a not ok HTTP response", async () => {
        global.fetch.mockImplementationOnce(() =>
          Promise.resolve({
            ok: false,
            status: 500,
          })
        );
        let testError = {message: "foo"};
        try {
          await fetchAlbumPhotos(1, 1, 1);
        } catch (error) {
          testError = error;
        }
        expect(testError.message).toEqual(createHttpErrorMessage(500));
      });

    it("should return the data when the response is ok", async () => {
        const data = await fetchAlbumPhotos(1,1,1);
        expect(data).toEqual({ data: "mocked data" });
    });
});

describe("fetchListOfAlbums", () => {
    beforeEach(() => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: "mocked data" }),
          ok: true,
        })
      );
    });
  
    afterEach(() => {
      global.fetch.mockRestore();
    });
  
    it("should call the fetch API with the correct URL", () => {
      fetchListOfAlbums(1, 20);
      expect(global.fetch).toHaveBeenCalledWith(
        `${PUBLIC_API_URL}/albums?_page=1&_limit=20`
      );
    });
  
    it("should throw an error if the page parameter is invalid", () => {
      expect(() => fetchListOfAlbums(undefined, 20)).toThrowError(
        createInvalidParamErrorMessage(undefined, 20)
      );
    });
  
    it("should throw an error if the limit parameter is invalid", () => {
      expect(() => fetchListOfAlbums(1, undefined)).toThrowError(
        createInvalidParamErrorMessage(1, undefined)
      );
    });

    it("should handle a not ok HTTP response", async () => {
        global.fetch.mockImplementationOnce(() =>
          Promise.resolve({
            ok: false,
            status: 500,
          })
        );
        let testError = {message: "foo"};
        try {
          await fetchListOfAlbums(1, 1);
        } catch (error) {
          testError = error;
        }
        expect(testError.message).toEqual(createHttpErrorMessage(500));
      });

    it("should return the data when the response is ok", async () => {
        const data = await fetchListOfAlbums(1,1);
        expect(data).toEqual({ data: "mocked data" });
    });
});

describe("fetchPhotoInfo", () => {
    beforeEach(() => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: "mocked data" }),
          ok: true,
        })
      );
    });
  
    afterEach(() => {
      global.fetch.mockRestore();
    });
  
    it("should call the fetch API with the correct URL", async () => {
      await fetchPhotoInfo(1);
      expect(global.fetch).toHaveBeenCalledWith(`${PUBLIC_API_URL}/photos/1`);
    });
  
    it("should throw an error if the photoId parameter is invalid", () => {
      expect(() => fetchUserInfo(undefined)).toThrowError(
        createInvalidParamErrorMessage(undefined)
      );
    });
  
    it("should handle a not ok HTTP response", async () => {
      global.fetch.mockImplementationOnce(() =>
        Promise.resolve({
          ok: false,
          status: 500,
        })
      );
      let testError = {message: "foo"};
      try {
        await fetchPhotoInfo(1);
      } catch (error) {
        testError = error;
      }
      expect(testError.message).toEqual(createHttpErrorMessage(500));
    });
  
    it("should return the data when the response is ok", async () => {
      const data = await fetchPhotoInfo(1);
      expect(data).toEqual({ data: "mocked data" });
    });
});

describe("fetchAlbumInfo", () => {
    beforeEach(() => {
        jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve({ data: "mocked data" }),
            ok: true,
        })
        );
    });

    afterEach(() => {
        global.fetch.mockRestore();
    });

    it("should call the fetch API with the correct URL", async () => {
        await fetchAlbumInfo(1);
        expect(global.fetch).toHaveBeenCalledWith(`${PUBLIC_API_URL}/albums/1`);
    });

    it("should throw an error if the photoId parameter is invalid", () => {
        expect(() => fetchAlbumInfo(undefined)).toThrowError(
        createInvalidParamErrorMessage(undefined)
        );
    });

    it("should handle a not ok HTTP response", async () => {
        global.fetch.mockImplementationOnce(() =>
        Promise.resolve({
            ok: false,
            status: 500,
        })
        );
        let testError = {message: "foo"};
        try {
        await fetchAlbumInfo(1);
        } catch (error) {
        testError = error;
        }
        expect(testError.message).toEqual(createHttpErrorMessage(500));
    });

    it("should return the data when the response is ok", async () => {
        const data = await fetchAlbumInfo(1);
        expect(data).toEqual({ data: "mocked data" });
    });
});
  
describe("fetchUserInfo", () => {
    beforeEach(() => {
        jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve({ data: "mocked data" }),
            ok: true,
        })
        );
    });

    afterEach(() => {
        global.fetch.mockRestore();
    });

    it("should call the fetch API with the correct URL", async () => {
        await fetchUserInfo(1);
        expect(global.fetch).toHaveBeenCalledWith(`${PUBLIC_API_URL}/users/1`);
    });

    it("should throw an error if the userId parameter is invalid", () => {
        expect(() => fetchUserInfo(undefined)).toThrowError(
        createInvalidParamErrorMessage(undefined)
        );
    });

    it("should handle a not ok HTTP response", async () => {
        global.fetch.mockImplementationOnce(() =>
        Promise.resolve({
            ok: false,
            status: 500,
        })
        );
        let testError = {message: "foo"};
        try {
        await fetchUserInfo(1);
        } catch (error) {
        testError = error;
        }
        expect(testError.message).toEqual(createHttpErrorMessage(500));
    });

    it("should return the data when the response is ok", async () => {
        const data = await fetchUserInfo(1);
        expect(data).toEqual({ data: "mocked data" });
    });
});
