import MainScreenTemplate from 'shared/screens/MainScreenTemplate'
// import { BlobServiceClient, StorageSharedKeyCredential } from "@azure/storage-blob";
//
export default function ViewPDF() {
  //

  const url = localStorage.getItem('pdfURL')
  // console.log(url);
  console.log(localStorage.getItem('source_language'))
  console.log(localStorage.getItem('target_language'))
  //
  return (
    <MainScreenTemplate extraTopPaddingSmall={false} loading={false}>
      <>
        <div className="flex size-full">
          <div className="w-full grid sm:grid-cols-4 grid-cols-1 gap-4 mt-4">
            <div className="sm:col-span-3"></div>
            <div className="bg-sidebar">aqui los botones</div>
          </div>
        </div>
      </>
    </MainScreenTemplate>
  )
  //
}
