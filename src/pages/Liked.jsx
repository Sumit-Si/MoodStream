import { Dot, Play } from "lucide-react";
import React from "react";

function Liked() {
  return (
    <div className="p-5 relative">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-3">Liked Songs</h1>
        <p className="text-base-content/80 flex">
          Playlist <Dot /> 100 songs
        </p>
      </div>
      <div className="my-6">
        <div className="overflow-x-auto rounded-box border border-base-content/20 bg-base-100">
          <table className="table">
            {/* head */}
            <thead className="text-base-content/90">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>Date Added</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>4</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
              {/* row 5 */}
              <tr>
                <th>5</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
              {/* row 6 */}
              <tr>
                <th>6</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
              {/* row 7 */}
              <tr>
                <th>7</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
              {/* row 8 */}
              <tr>
                <th>8</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
              
              {/* row 9 */}
              <tr>
                <th>9</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
              {/* row 10 */}
              <tr>
                <th>10</th>
                <td className="font-semibold">Midnight Serenade</td>
                <td>Echoes of the Night</td>
                <td>2025-08-05</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className="sticky bottom-2 bg-base-200 rounded-lg shadow-md shadow-base-content/20">
        <div className="flex justify-between items-center p-3 gap-1">
          <div className="flex gap-3 items-center">
            <div className="rounded-lg bg-base-300 p-2">
              <img
                className="w-10 h-10 object-cover object-center"
                src="https://images.pexels.com/photos/12488665/pexels-photo-12488665.jpeg"
                alt="song img"
              />
            </div>
            <div>
              <h4 className="font-bold">Current Song title</h4>
              <h5 className="text-sm text-base-content/80">Current Artist 1</h5>
            </div>
          </div>
          <div className="bg-primary p-2 rounded-full shadow-md shadow-primary/50">
            <Play className="text-base-300 fill-base-300 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liked;
