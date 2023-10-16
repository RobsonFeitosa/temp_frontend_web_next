import { useCallback, useEffect } from 'react'

import { useDropzone } from 'react-dropzone'
import { Text } from '@alosix-hub-ui/react'
import { CheckCircle, Warning } from 'phosphor-react'
import { usePdfExtract } from './usePdfExtract'
import { ICreateSample } from '../../dtos/sample.dto'
import { CollaboratorSingle } from '../../dtos/collaborator.dto'
import { useOrder } from '@/hooks/providers/order'
import Image from 'next/image'
import { Loading } from '@/components/Loading'

import {
  Collaborator,
  FileItem,
  FileWrapper,
  FilesContainer,
  Input,
  RejectContainer,
  UploadContainer,
} from './styles'

type ISamplesOrders = {
  collaborator: CollaboratorSingle
  samples: ICreateSample[]
}

export function UploadPdf() {
  const { mutate, isLoading = true } = usePdfExtract()

  const {
    addSamplesOrder,
    samplesOrder,
    setEmptySamplesOrder,
    addCollaboratorOrder,
    collaborator,
  } = useOrder()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return
      setEmptySamplesOrder()
      const payload = new FormData()

      acceptedFiles.forEach((file: File) => {
        payload.append('pdf', file)
      })

      mutate(payload, {
        onSuccess: (response) => {
          if (!response) return

          const { collaborator, samples }: ISamplesOrders = response.data

          addCollaboratorOrder(collaborator)

          samples.forEach((sample: ICreateSample) => {
            addSamplesOrder(sample)
          })
        },
      })
    },
    [setEmptySamplesOrder, mutate, addSamplesOrder, addCollaboratorOrder],
  )

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 5,
  })

  const hasFiles = samplesOrder.length > 0 && acceptedFiles.length > 0

  useEffect(() => {
    if (acceptedFiles.length === 0) {
      setEmptySamplesOrder()
    }
  }, [acceptedFiles, setEmptySamplesOrder])

  return (
    <UploadContainer
      {...getRootProps()}
      reject={isDragReject}
      success={hasFiles}
    >
      <Input {...getInputProps()} accept="application/pdf" />

      {!isLoading && (
        <>
          {!hasFiles && !isDragActive && (
            <Text size="lg">
              Arraste e solte alguns arquivos aqui ou clique para selecionar os
              arquivos
            </Text>
          )}
        </>
      )}

      {isDragActive && (
        <>
          {isDragReject ? (
            <RejectContainer>
              <Warning size={42} />

              <Text size="lg">Máximo 5 arquivos e apenas do tipo PDF</Text>
            </RejectContainer>
          ) : (
            <Text size="lg">Solte os arquivos aqui ...</Text>
          )}
        </>
      )}

      {hasFiles && (
        <FilesContainer>
          <div>
            <Text size="sm"> Arquivos analisados</Text>

            {acceptedFiles.map((file) => (
              <FileItem key={file.name} success={hasFiles}>
                <CheckCircle size={18} />

                <FileWrapper>
                  <Text size="xs">{file.name}</Text> <Text as="span">-</Text>
                  <Text size="xs">
                    Tamanho: {Math.floor(file.size / 1024)} Kb
                  </Text>{' '}
                </FileWrapper>
              </FileItem>
            ))}
            <Text size="xs" as="span">
              N. de laudos: <strong>{samplesOrder.length}</strong>
            </Text>
          </div>

          {collaborator && (
            <Collaborator>
              <Image
                src={collaborator.logoUrl}
                width={150}
                height={84}
                alt={collaborator.name}
              />
            </Collaborator>
          )}
        </FilesContainer>
      )}

      {isLoading && <Loading />}
    </UploadContainer>
  )
}
